/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
//import Utils from '../../utils/index.js';
//import ClientCache from '../../utils/cache/Client';
//import { camelizeKeys } from '../../utils/convertCase';
import {objectToCamel} from 'ts-case-convert';

import {Notification} from '../../types/notification';
//import { LinkedPlatform, LinkedGame } from '../../types/linked';
import {
  CashCoins,
  CashoutRecord,
  CashoutRegion,
  WithdrawInfo,
} from '../../types/cashout';
import {
  User,
  BlockedUser,
  BanningSource,
  ModerateContent,
} from '../../types/user';
import {
  DailyTask,
  TimeLimitedTask,
  TLEClaimQueryType,
  TLEQueryType,
} from '../../types/tasks';
import {FBTarget, HostStreamItem, StreamItem} from '../../types/stream';
import {DailyLoginReward, DLClaimRequest} from '../../types/dailyLogin';
import {VideoFilterType} from '../../types/video';
import {Channel} from '../../types/channel';
import {PlaybackItem} from '../../types/playback';
//import { PrizeUser, RealLifePrizeInfo } from '../.././types/prizes';
import {GameFollowingList} from '../../types/game';
import {EventSource} from '../../types/clientEvents';

import v3 from '../v3';

export default {
  getItem(
    uid: number | string,
    sessionKey: string
  ): Promise<{user: User; channel: Channel}> {
    return v3('get', `users/${uid}`, {}, sessionKey);
  },
  patch(
    uid: number | string,
    user: Partial<User | {language: string; region: string}>,
    sessionKey: string
  ): Promise<Pick<User, 'nicknameNextUpdateTime' | 'genderNextUpdateTime'>> {
    return v3('patch', `users/${uid}`, user, sessionKey);
  },
  bans: {
    post(
      id: number,
      bannedId: number,
      days: number,
      memo: string,
      reason: string,
      banningSource: BanningSource,
      sessionKey: string
    ) {
      return v3(
        'post',
        `users/${id}/bans`,
        {
          days,
          memo,
          reason,
          uid: bannedId,
          banningSource,
        },
        sessionKey
      );
    },
  },
  moderateContent: {
    post(
      id: number,
      moderatedUserId: number,
      operationList: ModerateContent[],
      sessionKey: string
    ) {
      return v3(
        'post',
        `users/${id}/moderate-content`,
        {
          uid: moderatedUserId,
          operationList,
        },
        sessionKey
      );
    },
  },
  blocks: {
    get(uid: number, sessionKey: string): Promise<{blockList: BlockedUser[]}> {
      return v3('get', `users/${uid}/blocks`, {}, sessionKey);
    },
    // 0: MAMBETTV, 1: YOUTUBE, 3:FACEBOOK
    post(
      uid: number,
      blockedUid: string,
      nickname: string,
      source: 0 | 1 | 2 | 3,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'post',
        `users/${uid}/blocks`,
        {
          blockedUid,
          nickname,
          source,
        },
        sessionKey
      );
    },
    delete(
      uid: number,
      blockedUid: string,
      source: 0 | 1 | 2 | 3,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'delete',
        `users/${uid}/blocks`,
        {
          blockedUid,
          source,
        },
        sessionKey
      );
    },
  },
  bugReportClaims: {
    get(
      uid: number,
      sessionKey: string
    ): Promise<{claim: boolean; startTime: number; endTime: number}> {
      return v3('get', `users/${uid}/bug-report-claims`, {}, sessionKey);
    },
  },
  cashCoins: {
    get(uid: number, sessionKey: string): Promise<CashCoins> {
      return v3('get', `users/${uid}/cash-coins`, {}, sessionKey);
    },
    withdraws: {
      get(
        uid: number,
        count: number,
        cursor: number,
        sessionKey: string
      ): Promise<{
        nextCursor: number;
        withdrawalList: CashoutRecord[];
      }> {
        return v3(
          'get',
          `users/${uid}/cash-coins/withdrawals`,
          {
            count,
            cursor,
          },
          sessionKey
        );
      },
      post(
        uid: number,
        data: {currency: string; currencyAmount: string},
        sessionKey: string
      ): Promise<void> {
        return v3(
          'post',
          `users/${uid}/cash-coins/withdrawals`,
          data,
          sessionKey
        );
      },
    },
    getSupportedRegions: (
      uid: number,
      sessionKey: string
    ): Promise<{
      regionList: CashoutRegion[];
    }> => v3('get', `users/${uid}/cash-coins/support-regions`, {}, sessionKey),
  },
  chatTokens: {
    post(
      uid: number,
      deviceId: string,
      sessionKey: string
    ): Promise<{token: string}> {
      return v3('post', `users/${uid}/chat-tokens`, {deviceId}, sessionKey);
    },
  },
  coins(
    uid: number,
    sessionKey: string
  ): Promise<{
    coin: number;
    ticketInfo: {
      balance: number;
      sent: number;
      received: number;
    };
  }> {
    return v3('get', `users/${uid}/coins`, {}, sessionKey);
  },
  dailyTasks: {
    get(
      uid: number,
      sessionKey: string
    ): Promise<{
      dailyTaskList: DailyTask[];
    }> {
      return v3('get', `users/${uid}/daily-tasks`, {}, sessionKey);
    },
    post(uid: number, recordId: number, sessionKey: string) {
      return v3(
        'post',
        `users/${uid}/daily-tasks`,
        {
          recordId,
        },
        sessionKey
      );
    },
  },
  timeLimitedEvents: {
    get(
      uid: number,
      type: TLEQueryType = TLEQueryType.ALL,
      sessionKey: string
    ): Promise<{eventList: TimeLimitedTask[]}> {
      return v3(
        'get',
        `users/${uid}/time-limited-events`,
        {
          type,
        },
        sessionKey
      );
    },
    post(
      uid: number,
      recordUuid: string,
      rewardOpType: TLEClaimQueryType = TLEClaimQueryType.CLAIM,
      sessionKey: string
    ) {
      return v3(
        'post',
        `users/${uid}/time-limited-events`,
        {
          recordUuid,
          rewardOpType,
        },
        sessionKey
      );
    },
  },
  dailyLogin: {
    get(
      uid: number,
      sessionKey: string
    ): Promise<{
      dailyLoginList: DailyLoginReward[];
      currentDay: number;
      nextDayTime: number;
    }> {
      return v3('get', `users/${uid}/daily-logins`, {}, sessionKey);
    },
    post(
      uid: number,
      review: DLClaimRequest = DLClaimRequest.CLAIM,
      sessionKey: string
    ) {
      return v3(
        'post',
        `users/${uid}/daily-logins`,
        {
          review,
        },
        sessionKey
      );
    },
  },
  deviceToken(
    uid: number,
    endpoint: string,
    p256dh: string,
    auth: string,
    sessionKey: string
  ): Promise<void> {
    const browser = 0; // 0:Chrome 1:Edge 2:Firefox 3:Opera

    return v3(
      'post',
      `users/${uid}/device-tokens`,
      {
        deviceId: '', //ClientCache.deviceId,
        env: 200, // IOS_LIVE: 1, IOS_INTERNAL: 2, IOS_DEBUG: 3, ANDROID_LIVE: 100, WEB_LIVE:200
        token: endpoint,
        extra: JSON.stringify({
          p256dh,
          auth,
          browser_type: browser,
        }),
      },
      sessionKey
    );
  },
  fb: {
    pages(
      uid: number,
      sessionKey: string
    ): Promise<{
      groupList?: FBTarget[];
      pageList?: FBTarget[];
    }> {
      return v3('get', `users/${uid}/fb/pages`, {}, sessionKey);
    },
  },
  followers: {
    get(
      uid: number,
      cursor: number,
      count: number,
      sessionKey: string
    ): Promise<{
      cursor: number;
      followerList: User[];
    }> {
      return v3('get', `users/${uid}/followers`, {cursor, count}, sessionKey);
    },
    getCount(userId: number, sessionKey: string): Promise<{count: number}> {
      return v3('get', `users/${userId}/followers/count`, {}, sessionKey);
    },
  },
  followings: {
    getCount(userId: number, sessionKey: string): Promise<{count: number}> {
      return v3('get', `users/${userId}/followings/count`, {}, sessionKey);
    },
    delete(
      channelId: number,
      userId: number,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'delete',
        `users/${userId}/followings`,
        {
          followeeUid: channelId,
        },
        sessionKey
      );
    },
    get(
      uid: number,
      cursor: number,
      count: number,
      sessionKey: string
    ): Promise<{
      cursor: number;
      followingList: User[];
    }> {
      return v3(
        'get',
        `users/${uid}/followings`,
        {
          cursor,
          count,
        },
        sessionKey
      );
    },
    patch(
      channelId: number,
      userId: number,
      notification: 0 | 1,
      sessionKey: string
    ): Promise<void> {
      // Update notification status
      // notification: 1 (notification ON) / 0 (notitication OFF);
      // followee_uid: empty or zero (all followees) / non-zero (one followee)
      return v3(
        'patch',
        `users/${userId}/followings`,
        {
          followeeUid: channelId,
          notification,
        },
        sessionKey
      );
    },
    post(
      channelId: number,
      userId: number,
      source: EventSource,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'post',
        `users/${userId}/followings`,
        {
          followeeUid: channelId,
          source,
        },
        sessionKey
      );
    },
    getStreams(
      userId: number,
      sessionKey: string
    ): Promise<{
      streamList: StreamItem[];
    }> {
      return v3('get', `users/${userId}/followings/streams`, {}, sessionKey);
    },
  },
  followingsHostStreams: {
    get(
      userId: number,
      _params: {
        cursor: number;
        count: number;
      },
      sessionKey: string
    ): Promise<{
      streamList: HostStreamItem[];
    }> {
      return v3('get', `users/${userId}/followings/hosts`, {}, sessionKey);
    },
  },
  receivedLikes: {
    getCount(
      userId: number,
      type: VideoFilterType,
      sessionKey: string
    ): Promise<{count: number}> {
      return v3(
        'get',
        `users/${userId}/received-likes/count`,
        {type},
        sessionKey
      );
    },
  },
  likedPlaybacks: {
    get(
      userId: number,
      type: VideoFilterType,
      cursor: number,
      count: number,
      sessionKey: string
    ): Promise<{cursor: number; playbackList: PlaybackItem[]}> {
      return v3(
        'get',
        `users/${userId}/liked-playbacks`,
        {
          type,
          cursor,
          count,
        },
        sessionKey
      );
    },
    getCount(
      userId: number,
      sessionKey: string,
      type?: VideoFilterType
    ): Promise<{count: number}> {
      return v3(
        'get',
        `users/${userId}/liked-playbacks/count`,
        {type},
        sessionKey
      );
    },
  },
  linkedGames: {
    get(userId: number, sessionKey: string): Promise<any[]> {
      return v3('get', `users/${userId}/linked-games`, {}, sessionKey);
    },
    delete(userId: number, gameId: number, sessionKey: string): Promise<void> {
      return v3(
        'delete',
        `users/${userId}/linked-games/${gameId}`,
        {},
        sessionKey
      );
    },
    getItem(userId: number, gameId: number, sessionKey: string): Promise<any> {
      return v3(
        'get',
        `users/${userId}/linked-games/${gameId}`,
        {},
        sessionKey
      );
    },
    post(
      userId: number,
      gameId: number,
      token: string,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'post',
        `users/${userId}/linked-games`,
        {gameId, token},
        sessionKey
      );
    },
  },
  linkedPlatforms: {
    get(
      userId: number,
      sessionKey: string
    ): Promise<{
      linkInfoList: any[];
    }> {
      return v3(
        'get',
        `users/${userId}/linked-platforms`,
        {
          forceRefresh: 1,
        },
        sessionKey
      );
    },
    delete(
      userId: number,
      platform: string,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'delete',
        `users/${userId}/linked-platforms/${platform}`,
        {},
        sessionKey
      );
    },
    patch(
      userId: number,
      platform: string,
      enable: boolean,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'patch',
        `users/${userId}/linked-platforms/${platform}`,
        {
          enable: enable ? 1 : 0,
        },
        sessionKey
      );
    },
    custom: {
      post(
        userId: number,
        serverAddr: string,
        streamKey: string,
        name: string,
        sessionKey: string
      ): Promise<void> {
        return v3(
          'post',
          `users/${userId}/linked-platforms/custom`,
          {
            serverAddr,
            streamKey,
            name,
          },
          sessionKey
        );
      },
    },
    disableWhileStreaming(
      userId: number,
      platformId: 0 | 1 | 2,
      sessionKey: string
    ) {
      // 0: google(youtube), 1: twitch , 2: facebook
      return v3(
        'delete',
        `channels/${userId}/forwarders/${platformId}`,
        {},
        sessionKey
      );
    },
  },

  playbacks: {
    getCount(
      uid: number,
      type: VideoFilterType,
      sessionKey: string
    ): Promise<{
      totalCount: number;
      countByGame: {
        gameId: number;
        count: number;
      }[];
    }> {
      return v3('get', `users/${uid}/playbacks/count`, {type}, sessionKey);
    },
  },
  getPushMessages(
    userId: number,
    cursor: string,
    count: number,
    sessionKey: string
  ): Promise<{
    msgList: Notification[];
    extraInfo: {
      userInfoList: {
        uid: number;
        nickname: string;
        thumbnail: string;
      }[];
      playbackInfoList: {
        playbackUuid: string;
        name: string;
      }[];
      commentInfoList: {
        attachment: string;
        commentId: number;
        content: string;
        status: number;
        target_id: string;
        target_type: number;
      }[];
    };
    nextToMsgId: string;
  }> {
    return v3(
      'get',
      `users/${userId}/push-messages`,
      {
        toMsgId: cursor,
        count,
      },
      sessionKey
    ).then(resp => {
      resp.msgList = resp.msgList.map((msg: any) => {
        msg.data = objectToCamel(JSON.parse(msg.data));
        return msg;
      });
      return resp;
    });
  },
  pushMessageSessions: {
    get(userId: number, sessionKey: string): Promise<{readMsgId: number}> {
      // Get last read message ID and amount of unread messages
      return v3('get', `users/${userId}/push-message-sessions`, {}, sessionKey);
    },
    patch(
      userId: number,
      readMsgId: number,
      sessionKey: string
    ): Promise<{readMsgId: number}> {
      return v3(
        'patch',
        `users/${userId}/push-message-sessions`,
        {
          readMsgId,
        },
        sessionKey
      );
    },
  },
  getWithdrawInfo(
    uid: number,
    sessionKey: string
  ): Promise<{userWithdrawInfo: WithdrawInfo}> {
    return v3('get', `users/${uid}/withdraw-info`, {}, sessionKey);
  },
  getRecommendedStreamers(
    contentLanguage: string | undefined,
    userId: number,
    sessionKey: string
  ): Promise<
    {
      streamerList: {user: User; channel: Channel}[];
      tag: string;
    }[]
  > {
    return v3(
      'get',
      `users/${userId}/recommended-streamers`,
      {
        contentLanguage,
      },
      sessionKey
    );
  },
  getRecommendedStream(
    contentLanguage: string | undefined,
    userId: number,
    sessionKey: string
  ): Promise<{
    streamList: StreamItem[];
  }> {
    return v3(
      'get',
      `users/${userId}/recommended-streams`,
      {
        lang: contentLanguage,
      },
      sessionKey
    );
  },
  realLifePrizes: {
    get(
      userId: number,
      sessionKey: string,
      type?: number
    ): Promise<{
      prizeList: any[];
    }> {
      return v3(
        'get',
        `users/${userId}/real-life-prizes`,
        {
          type,
        },
        sessionKey
      );
    },

    post(
      userId: number,
      prizeUser: any,
      prizeId: number,
      sessionKey: string
    ): Promise<{
      message: string;
      resultCode: number;
    }> {
      return v3(
        'post',
        `users/${userId}/real-life-prizes`,
        {
          ...prizeUser,
          prizeId,
        },
        sessionKey
      );
    },
  },
  clipFeeds: {
    get(
      userId: number,
      params: {
        lang?: string; // content language
        count?: number;
        tagUniqList?: string;
        cursor?: number;
      },
      sessionKey: string
    ): Promise<{
      cursor: number;
      playbackList: PlaybackItem[];
    }> {
      return v3('get', `users/${userId}/clip-feeds`, params, sessionKey);
    },
    delete(
      userId: number,
      uuidList: string[],
      sessionKey: string
    ): Promise<void> {
      return v3(
        'delete',
        `users/${userId}/clip-feeds`,
        {
          uuidList,
        },
        sessionKey
      );
    },
    getVerifiedClipFeeds(
      userId: number,
      params: {
        lang?: string; // content language
        count?: number;
        cursor?: number;
      },
      sessionKey: string
    ): Promise<{
      cursor: number;
      playbackList: PlaybackItem[];
    }> {
      // backend will filter clip feeds with tagUniqList hardcoded
      return v3(
        'get',
        `users/${userId}/verified-clip-feeds`,
        params,
        sessionKey
      );
    },
  },
  contentTags: {
    get(
      userId: number,
      sessionKey: string
    ): Promise<{
      tagUniqList: string[];
    }> {
      return v3('get', `users/${userId}/content-tags`, {}, sessionKey);
    },
    patch(
      userId: number,
      tagUniqList: string[],
      sessionKey: string
    ): Promise<void> {
      return v3(
        'patch',
        `users/${userId}/content-tags`,
        {
          tagUniqList,
        },
        sessionKey
      );
    },
  },
  gameFollowings: {
    get(
      uid: number,
      sessionKey: string
    ): Promise<{
      gameFollowingList: GameFollowingList[];
    }> {
      return v3('get', `users/${uid}/game-followings`, {}, sessionKey);
    },
    post(uid: number, gameIdList: number[], sessionKey: string): Promise<void> {
      return v3(
        'post',
        `users/${uid}/game-followings`,
        {
          gameIdList,
        },
        sessionKey
      );
    },
    delete(
      uid: number,
      gameIdList: number[],
      sessionKey: string
    ): Promise<void> {
      return v3(
        'delete',
        `users/${uid}/game-followings`,
        {
          gameIdList,
        },
        sessionKey
      );
    },
  },
};
