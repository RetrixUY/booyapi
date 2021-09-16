/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @author RetrixUY <retrixuy@gmail.com>
*/
import axios, { AxiosRequestConfig, Method } from "axios";
import {objectToCamel, objectToSnake } from 'ts-case-convert';
import {v1 as uuidv1} from 'uuid';

import ApiApps from './api/apps';
import ApiAuths from './api/auths';
import ApiAssets from './api/assets';
import ApiCallbacks from './api/callbacks';
import ApiChannels from './api/channels';
import ApiChatrooms from './api/chatrooms';
import ApiClans from './api/clans';
import ApiClipCampaigns from './api/clipCampaigns';
import ApiComments from './api/comments';
import ApiContentLanguages from './api/contentLanguages';
import ApiFeeds from './api/feeds';
import ApiFFAccounts from './api/ffAccounts';
import ApiFreeGifts from './api/freeGifts';
import ApiGames from './api/games';
import ApiGameBuilds from './api/gameBuilds';
import ApiGifts from './api/gifts';
import ApiGuests from './api/guests';
import ApiNews from './api/news';
import ApiPlaybacks from './api/playbacks';
import ApiProtections from './api/protections';
import ApiRankings from './api/rankings';
import ApiReports from './api/reports';
import ApiSearches from './api/searches';
import ApiStickers from './api/stickers';
import ApiStickerPacks from './api/stickerPacks';
import ApiStreamEvents from './api/streamEvents';
import ApiStreams from './api/streams';
import ApiStreamerPrograms from './api/streamerPrograms';
import ApiTags from './api/tags';
import ApiUtils from './api/utils';
import ApiUsers from './api/users';
import { RestAPI } from "..";

// eslint-disable-next-line @typescript-eslint/ban-types
export function apiv3(method: Method = 'GET',src: string,data: any = {},sessionKey: string,headers?: object): Promise<any>{

    const url = `https://booyah.live/api/v3/${src}`;
    const requestId = uuidv1();
    
    const params: AxiosRequestConfig = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json',
            'X-Request-ID': requestId,
            'Booyah-Session-Key': sessionKey,
            'X-CSRF-Token': sessionKey,
            ...headers
        },
        withCredentials: true
    }
    switch (method) {
        case 'get':
            params.params = objectToSnake(data);
            break;
        case 'delete':
            params.params = JSON.stringify(data);
            params.data = JSON.stringify(data);
            break;
        case 'post':
            params.data = objectToSnake(data);
            break
        default:
            params.data = JSON.stringify(data);
            break;
    }
    return axios(params)
        .then(res => {
            data = objectToCamel(res.data);
            res.data = data;

            if (headers){
                return res;
            }
            else {
                return data;
            }
        })
        .catch(e => {
            if (e.response){
                e.response.data = objectToCamel(e.response.data);
                const status = RestAPI.utils.getStatusCode(e);
                const code = RestAPI.utils.getSubCode(e);
                throw {status,code};
            }
        })
}

export default {
    getServerTs(): Promise<{serverTs: number}>{
        return apiv3('get','server-ts',{},'');
         },
    auths: ApiAuths,
    apps: ApiApps,
    assets: ApiAssets,
    callbacks: ApiCallbacks,
    channels: ApiChannels,
    chatrooms: ApiChatrooms,
    clans: ApiClans,
    clipCampaigns: ApiClipCampaigns,
    comments: ApiComments,
    contentLanguages: ApiContentLanguages,
    feeds: ApiFeeds,
    ffAccounts: ApiFFAccounts,
    freeGifts: ApiFreeGifts,
    games: ApiGames,
    gameBuilds: ApiGameBuilds,
    gifts: ApiGifts,
    guests: ApiGuests,
    news: ApiNews,
    playbacks: ApiPlaybacks,
    protections: ApiProtections,
    rankings: ApiRankings,
    report: ApiReports,
    searches: ApiSearches,
    stickerPacks: ApiStickerPacks,
    stickers: ApiStickers,
    streamEvents: ApiStreamEvents,
    streamerPrograms: ApiStreamerPrograms,
    streams: ApiStreams,
    tags: ApiTags,
    utils: ApiUtils,
    users: ApiUsers,
}