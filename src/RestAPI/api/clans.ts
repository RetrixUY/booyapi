/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import v3 from '../v3';
import {
  Clan,
  ClanApplicationReview,
  ClanMember,
  ClanMemberStats,
  ClanStats,
  ClanStatsSort,
  ClanStatsType,
  ClanApplication,
} from '../../types/clan';
import {PlaybackItem} from '../../types/playback';
import {VideoFilterType} from '../../types/video';

export default {
  getItem(clanId: number | string, sessionKey: string): Promise<Clan> {
    return v3('get', `clans/${clanId}`, {}, sessionKey);
  },
  get(
    params: {
      cursor: number;
      count: number;
    },
    sessionKey: string
  ): Promise<{
    cursor: number;
    clanList: Clan[];
  }> {
    return v3('get', 'clans', params, sessionKey);
  },
  getPopularList(sessionKey: string): Promise<{
    cursor: number;
    clanList: Clan[];
  }> {
    return v3('get', 'popular-clans', {}, sessionKey);
  },
  stats: {
    get(
      clanId: number,
      params: {
        statsType: ClanStatsType;
        offset: number;
      },
      sessionKey: string
    ): Promise<ClanStats> {
      return v3('get', `clans/${clanId}/stats`, params, sessionKey);
    },
  },
  members: {
    get(
      clanId: number,
      sessionKey: string
    ): Promise<{
      cursor: number;
      memberList: ClanMember[];
    }> {
      // members doesn't support pagination for now
      return v3('get', `clans/${clanId}/members`, {}, sessionKey);
    },
    delete(clanId: number, memberId: number, sessionKey: string) {
      return v3(
        'delete',
        `clans/${clanId}/members/${memberId}`,
        {},
        sessionKey
      );
    },
    stats: {
      get(
        clanId: number,
        params: {
          cursor: number;
          count: number;
          sortMethod: ClanStatsSort;
          statsType: ClanStatsType;
          offset: number;
        },
        sessionKey: string
      ): Promise<{
        cursor: number;
        memberStatsList: ClanMemberStats[];
      }> {
        return v3('get', `clans/${clanId}/member-stats`, params, sessionKey);
      },
    },
  },
  playbacks: {
    get(
      clanId: number,
      params: {cursor: number; count: number; type: VideoFilterType},
      sessionKey: string
    ): Promise<{
      cursor: number;
      playbackList: PlaybackItem[];
    }> {
      return v3('get', `clans/${clanId}/playbacks`, params, sessionKey);
    },
    count: {
      get(
        clanId: number,
        type: VideoFilterType,
        sessionKey: string
      ): Promise<{
        totalCount: number;
      }> {
        return v3(
          'get',
          `clans/${clanId}/playbacks/count`,
          {
            type,
          },
          sessionKey
        );
      },
    },
  },
  applications: {
    get(
      clanId: number,
      sessionKey: string,
      params?: {cursor: number; count: number}
    ): Promise<{
      cursor: number;
      applicationList: ClanApplication[];
    }> {
      return v3('get', `clans/${clanId}/applications`, params, sessionKey);
    },
    reviews: {
      post(
        clanId: number,
        appId: number,
        review: ClanApplicationReview,
        sessionKey: string
      ) {
        return v3(
          'post',
          `clans/${clanId}/applications/${appId}/reviews`,
          {
            review,
          },
          sessionKey
        );
      },
    },
    post(
      payload: {
        clanId: number;
        phone: string;
        email: string;
        reason: string;
      },
      sessionKey: string
    ) {
      const uid = ''; //ClientCache.loggedUID;
      return v3('post', `users/${uid}/clan-applications`, payload, sessionKey);
    },
  },
  permission(clanId: number, sessionKey: string) {
    return v3('get', `clans/${clanId}/permissions`, {}, sessionKey);
  },
};
