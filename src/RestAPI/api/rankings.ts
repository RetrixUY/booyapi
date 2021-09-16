import { apiv3 } from '..';
import {
  RankingListKey,
  Rankings,
  RankingTimeScope,
  RankingUserProfile
} from '../../types/ranking';

export default {
  getSummaryList(sessionKey: string): Promise<Rankings> {
    return apiv3('get', 'rankings', { count: 6 },sessionKey);
  },
  get(
    key: RankingListKey,
    timeScope: RankingTimeScope,sessionKey: string
  ): Promise<{
    rankingList: RankingUserProfile[];
  }> {
    switch (key) {
      case RankingListKey.MOST_WATCHED:
        return this.getWatchedTimes(timeScope,sessionKey);
      case RankingListKey.RISING_STAR:
        return this.getWatchedTimes(timeScope,sessionKey, true);
      case RankingListKey.MOST_POPULAR:
        return this.getPopularity(timeScope,sessionKey);
      case RankingListKey.COMMUNITY_DARLINGS:
        return this.getPopularity(timeScope,sessionKey, true);
      case RankingListKey.SWAG_KINGS:
        return this.getContributions(timeScope,sessionKey);
    }
  },
  getWatchedTimes(
    by: RankingTimeScope,sessionKey: string,
    exclSignedStreamer?: boolean
  ): Promise<{ rankingList: RankingUserProfile[] }> {
    return apiv3('get', 'rankings/watched-times', {
      by,
      exclSignedStreamer
    },sessionKey);
  },
  getPopularity(
    by: RankingTimeScope,sessionKey: string,
    exclSignedStreamer?: boolean
  ): Promise<{ rankingList: RankingUserProfile[] }> {
    return apiv3('get', 'rankings/popularity', {
      by,
      exclSignedStreamer
    },sessionKey);
  },
  getContributions(
    by: RankingTimeScope,sessionKey: string
  ): Promise<{ rankingList: RankingUserProfile[] }> {
    return apiv3('get', 'rankings/contributions', { by },sessionKey);
  }
};
