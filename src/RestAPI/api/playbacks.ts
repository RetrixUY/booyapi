/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { apiv3 } from '..';
import { PlaybackItem, Sort as PlaybackSort, Playback } from '../../types/playback';
import { Comment } from '../../types/comment';
import { VideoFilterType } from '../../types/video';

export default {
  delete(uuid: string,sessionKey:string): Promise<void> {
    return apiv3('delete', `playbacks/${uuid}`,{},sessionKey);
  },
  get(
    channelId: number | string | undefined,
    cursor: number,
    count: number,
    type: VideoFilterType,sessionKey:string,
    contentLanguage?: string,
    gameId?: number,
    sortMethod?: PlaybackSort
  ): Promise<{
    cursor: number;
    playbackList: PlaybackItem[];
  }> {
    return apiv3('get', 'playbacks', {
      channelId,
      cursor,
      count,
      type,
      contentLanguage,
      gameId,
      sortMethod
    },sessionKey);
  },
  getItem(uuid: string,sessionKey:string): Promise<PlaybackItem> {
    return apiv3('get', `playbacks/${uuid}`,{},sessionKey).then(data => {
      // sort by resolution, in descreasing order
      data.playback.endpointList = data.playback.endpointList.sort(
        (a: any, b: any) => (a.resolution > b.resolution ? -1 : 1)
      );
      return data;
    });
  },
  patch(
    uuid: string,
    playback: Partial<Playback> & {
      thumbnailPath?: string;
      pinned?: number;
    },sessionKey:string
  ) {
    return apiv3('patch', `playbacks/${uuid}`, playback,sessionKey);
  },
  likes: {
    post(uuid: string,sessionKey:string): Promise<{ likes: number }> {
      return apiv3('post', `playbacks/${uuid}/likes`,{},sessionKey);
    },
    delete(uuid: string,sessionKey:string): Promise<{ likes: number }> {
      return apiv3('delete', `playbacks/${uuid}/likes`,{},sessionKey);
    }
  },
  comments: {
    get(
      uuid: string,
      params: {
        cursor: number;
        count: number;
      },sessionKey:string
    ): Promise<{
      commentList: Comment[];
      nextCursor: number;
    }> {
      return apiv3('get', `playbacks/${uuid}/comments/tops`, params,sessionKey);
    },
    getCount(uuid: string,sessionKey:string): Promise<{ commentCnt: number }> {
      return apiv3('get', `playbacks/${uuid}/comments/count`,{},sessionKey);
    }
  },
  dislikes: {
    post(uuid: string,sessionKey:string): Promise<{ dislikes: number }> {
      return apiv3('post', `playbacks/${uuid}/dislikes`,{},sessionKey);
    }
  },
  staffOps: {
    post(
      uuid: string,
      campaignId: number,
      lang: string,
      tagUniqList: string[],sessionKey:string
    ) {
      return apiv3('post', `playbacks/${uuid}/staff-ops`, {
        campaignId,
        lang,
        tagUniqList
      },sessionKey);
    }
  }
};
