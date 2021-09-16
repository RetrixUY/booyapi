import { apiv3 } from '..';
import { PlaybackItem } from '../../types/playback';
import { GameFollowingList } from '../../types/game';

export default {
  clipFeeds: {
    get(
      deviceId: string,
      params: {
        lang?: string; // content language
        count?: number;
        tagUniqList?: string;
        cursor?: number;
      },sessionKey:string
    ): Promise<{
      cursor: number;
      playbackList: PlaybackItem[];
    }> {
      return apiv3('get', `guests/${deviceId}/clip-feeds`, params,sessionKey);
    },
    delete(deviceId: string, uuidList: string[],sessionKey:string): Promise<void> {
      return apiv3('delete', `guests/${deviceId}/clip-feeds`, {
        uuidList
      },sessionKey);
    },
    getVerifiedClipFeeds(
      deviceId: string,
      params: {
        lang?: string; // content language
        count?: number;
        cursor?: number;
      },sessionKey:string
    ): Promise<{
      cursor: number;
      playbackList: PlaybackItem[];
    }> {
      // backend will filter clip feeds with tagUniqList hardcoded
      return apiv3('get', `guests/${deviceId}/verified-clip-feeds`, params,sessionKey);
    }
  },
  gameFollowings: {
    get(
      deviceId: string,sessionKey:string
    ): Promise<{
      gameFollowingList: GameFollowingList[];
    }> {
      return apiv3('get', `guests/${deviceId}/game-followings`,{},sessionKey);
    }
  }
};
