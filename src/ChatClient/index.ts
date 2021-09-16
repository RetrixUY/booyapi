/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author RetrixUY <retrixuy@gmail.com>
 */

import { EventEmitter } from "events";
import WebSocket from 'ws';
import {v1 as uuidv1} from 'uuid';
import { BadgeCode, ChatMessage, ModAction, ModActionType, MsgType, SendMsgType } from "../types/chat";
import RestAPI from "../RestAPI";

export declare interface ChatClient {

    on(event: "message", listener: (msg: ChatMessage) => void): this;
    on(event: "modAction",listener: (msg: ModAction) => void):this;
    //on(event: "giftReceived",listener: (msg: GiftReceived)=> void): this;
}

export class ChatClient extends EventEmitter {

    webSocket?: WebSocket;
    sessionKey: string;
    userId: number;
    deviceId: string;
    roomId = 0;
    token = "";
    channelId = 0;
    channelName = "";


    constructor(sessionKey:string, userId:number){
        super();
        this.deviceId = uuidv1();
        this.userId = userId;
        this.sessionKey = sessionKey;
    }

    async connect(channel_id:number): Promise<void>{
        
        this.channelId = channel_id;
        this.token = (await RestAPI.users.chatTokens.post(this.userId,this.deviceId,this.sessionKey)).token;
        const channel = (await RestAPI.channels.getItem(this.channelId,this.sessionKey));
        this.channelId = channel.channel.channelId;
        this.channelName = channel.user.nickname;
        this.roomId = channel.channel.chatroomId;
        const url = `wss://chat.booyah.live:9511/ws/v2/chat/conns?room_id=${this.roomId}&uid=${this.userId}&device_id=${this.deviceId}&token=${this.token}`;
        this.webSocket = new WebSocket(url)

        this.webSocket.onopen = () => {
            setInterval(()=>{
                this.sendHeartbeat();
            },60000)
        }

        this.webSocket.onerror = (ev) => {
            console.log("error ",ev);
        }

        this.webSocket.onclose = (ev) => {
            console.log("Connection lost, reconnecting ",ev.code,ev.reason);
            //this.connect(this.channel_id);
        }

        this.webSocket.onmessage = (ev) => {
            const messages : Array<any> = JSON.parse(ev.data.toString('utf-8'));

            messages.forEach(async (message: any) => {
                switch (message.event) {
                    case MsgType.CHAT:
                        this.emit('message', processChatMessage(message,this.channelId.toString()));
                        break;
                    case MsgType.BAN_USER:
                        this.emit('modAction', processModAction(message,this.channelId.toString(),this.channelName,ModActionType.BAN))
                        break;
                    case MsgType.TIMEOUT_USER:
                        this.emit('modAction', processModAction(message,this.channelId.toString(),this.channelName,ModActionType.TIMEOUT))
                        break;
                    case MsgType.UNBAN_USER:
                        this.emit('modAction', processModAction(message,this.channelId.toString(),this.channelName,ModActionType.UNBAN))
                }
            });
        }
    }
    private sendHeartbeat() {
        this.webSocket?.send('{"msg":""}');
    }
    public sendMessage(text: string):void{
        this.webSocket?.send(JSON.stringify({
            event: SendMsgType.CHAT,
            data: {
                msg: text,
                clt_msg_id: 'web-'+this.deviceId
            }
        }));
    }
}

type socketMessage = {
    data: {
        badge_list: [number],
        clt_msg_id: string,
        msg: string,
        msg_param: {
            nickname: string,
        },
        nickname: string,
        plat: number,
        srv_msg_id: string,
        sticker_id: number,
        uid: string
    },
    event: number
}
type socketModAction = {
    data: {
        badge_list: [],
        clt_msg_id: string,
        msg_param: {
            duration?: string,
            mod_nickname: string,
            nickname: string
        },
        plat: number,
        srv_msg_id: string,
        uid: string
    },
    event: number
}

function processChatMessage(message: socketMessage,channelId: string): ChatMessage{
    const msg: ChatMessage = {
        clientId: message.data.clt_msg_id,
        serverId: message.data.srv_msg_id,
        channelId: channelId,
        userId: message.data.uid,
        userNickname: message.data.nickname,
        text: message.data.msg,
        userIsModerator: message.data.badge_list.includes(BadgeCode.moderator),
        userIsOwner: message.data.badge_list.includes(BadgeCode.owner),
        timestamp: Math.round(new Date().getTime()/1000)
    }
    return msg;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function processModAction(message: socketModAction,channelId: string, channelName: string,actionType: ModActionType):ModAction {
    const action: ModAction = {
        clientId: message.data.clt_msg_id,
        serverId: message.data.srv_msg_id,
        userId: message.data.uid,
        userNickname: message.data.msg_param.nickname,
        modNickname: message.data.msg_param.mod_nickname,
        duration: message.data.msg_param.duration,
        channelId: channelId,
        channelName: channelName,
        actionType: actionType,
        timestamp: Math.round(new Date().getTime()/1000)
    }
    return action;
}