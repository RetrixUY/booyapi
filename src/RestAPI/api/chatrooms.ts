/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import v3 from '../v3';
import {BlockedPhrase, Chatroom, ChatUser, HotWord} from '../../types/chat';
import {StreamingPlatform} from '../../types/platform';
import {ViewerCount} from '../../types/stream';
import {BannedUser, ModeratorUser, StaffUser} from '../../types/user';

export default {
  audiences: {
    getCount(
      roomId: number,
      channelId: number,
      sessionKey: string
    ): Promise<{
      loggedInCcu: number;
      ccu: number;
      viewerCount: number;
      viewerCountInfo: ViewerCount[];
    }> {
      return v3(
        'get',
        `chatrooms/${roomId}/audiences/count`,
        {
          channelId,
        },
        sessionKey
      );
    },
    get(
      roomId: number,
      cursor: number,
      count: number,
      sessionKey: string
    ): Promise<{audienceList: ChatUser[]; cursor: number}> {
      return v3(
        'get',
        `chatrooms/${roomId}/audiences`,
        {
          cursor,
          count,
        },
        sessionKey
      );
    },
  },
  bannedWords: {
    delete(
      roomId: number,
      phraseId: number,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'delete',
        `chatrooms/${roomId}/banned-words`,
        {
          id: phraseId,
        },
        sessionKey
      );
    },
    get(
      roomId: number,
      sessionKey: string
    ): Promise<{bannedWordList: BlockedPhrase[]}> {
      return v3('get', `chatrooms/${roomId}/banned-words`, {}, sessionKey);
    },
    patch(
      roomId: number,
      phrase: BlockedPhrase,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'patch',
        `chatrooms/${roomId}/banned-words`,
        phrase,
        sessionKey
      );
    },
    post(
      roomId: number,
      word: string,
      sessionKey: string
    ): Promise<{id: number}> {
      return v3(
        'post',
        `chatrooms/${roomId}/banned-words`,
        {
          word,
        },
        sessionKey
      );
    },
  },
  hotPhrases: {
    get(
      roomId: number,
      sessionKey: string
    ): Promise<{hotPhraseList: HotWord[]}> {
      return v3('get', `chatrooms/${roomId}/hot-phrases`, {}, sessionKey);
    },
    delete(roomId: number, phraseId: number, sessionKey: string) {
      return v3(
        'delete',
        `chatrooms/${roomId}/hot-phrases/${phraseId}`,
        {},
        sessionKey
      );
    },
    post(
      roomId: number,
      phrase: string,
      sessionKey: string
    ): Promise<{hotPhraseId: number}> {
      return v3(
        'post',
        `chatrooms/${roomId}/hot-phrases`,
        {
          phrase,
        },
        sessionKey
      );
    },
    patch(
      roomId: number,
      phraseId: number,
      phrase: string,
      sessionKey: string
    ) {
      return v3(
        'patch',
        `chatrooms/${roomId}/hot-phrases/${phraseId}`,
        {
          phrase,
        },
        sessionKey
      );
    },
  },
  getItem(roomId: number, sessionKey: string): Promise<Chatroom> {
    return v3('get', `chatrooms/${roomId}`, {}, sessionKey);
  },
  patch(
    roomId: number,
    chatroom: Partial<Chatroom>,
    sessionKey: string
  ): Promise<void> {
    return v3('patch', `chatrooms/${roomId}`, chatroom, sessionKey);
  },
  moderators: {
    get(
      roomId: number,
      sessionKey: string
    ): Promise<{moderatorList: ModeratorUser[]; staffList: StaffUser[]}> {
      return v3('get', `chatrooms/${roomId}/moderators`, {}, sessionKey);
    },
    post(
      roomId: number,
      uid: string | number,
      sessionKey: string
    ): Promise<void> {
      if (typeof uid === 'string') {
        uid = parseInt(uid);
      }
      return v3('post', `chatrooms/${roomId}/moderators`, {uid}, sessionKey);
    },
    delete(
      roomId: number,
      uid: string | number,
      sessionKey: string
    ): Promise<void> {
      if (typeof uid === 'string') {
        uid = parseInt(uid);
      }
      return v3('delete', `chatrooms/${roomId}/moderators`, {uid}, sessionKey);
    },
  },
  mutes: {
    delete(
      roomId: number,
      uid: string | number,
      nickname: string,
      source: StreamingPlatform,
      type: 0 | 1,
      sessionKey: string
    ): Promise<void> {
      if (typeof uid === 'number') {
        uid = uid.toString();
      }
      // type, 0: Temporary mute, 1: Permanent mute
      // source, 0: MAMBETTV, 1: YOUTUBE, 3:FACEBOOK
      return v3(
        'delete',
        `chatrooms/${roomId}/mutes`,
        {
          uid,
          nickname,
          source,
          type,
        },
        sessionKey
      );
    },
    get(
      roomId: number,
      cursor: number,
      count: number,
      sessionKey: string
    ): Promise<{
      cursor: number;
      muteList: BannedUser[];
    }> {
      return v3(
        'get',
        `chatrooms/${roomId}/mutes`,
        {cursor, count},
        sessionKey
      );
    },
    getItem(
      roomId: number,
      uid: string,
      source: StreamingPlatform,
      sessionKey: string
    ): Promise<BannedUser | undefined> {
      return v3(
        'get',
        `chatrooms/${roomId}/mutes`,
        {uid, source},
        sessionKey
      ).then((res: any) => {
        return res.muteList[0];
      });
    },
    post(
      roomId: number,
      uid: string | number,
      nickname: string,
      source: StreamingPlatform,
      type: 0 | 1,
      sessionKey: string,
      message?: string
    ): Promise<void> {
      if (typeof uid === 'number') {
        uid = uid.toString();
      }
      // type, 0: Temporary mute, 1: Permanent mute
      // source, 0: MAMBETTV, 1: YOUTUBE, 3:FACEBOOK
      return v3(
        'post',
        `chatrooms/${roomId}/mutes`,
        {
          uid,
          nickname,
          source,
          type,
          message,
        },
        sessionKey
      );
    },
  },
};
