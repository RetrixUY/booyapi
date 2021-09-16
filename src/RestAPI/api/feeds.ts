import { apiv3 } from '..';
import { PlaybackItem } from '../../types/playback';

export default {
  getHot(
    cursor: number,
    count: number,
    contentLanguage: string | undefined,sessionKey:string
  ): Promise<{
    playbackList: PlaybackItem[];
  }> {
    return apiv3('get', 'feeds/hot', { cursor, count, contentLanguage },sessionKey);
  }
};
