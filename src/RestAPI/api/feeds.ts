import v3 from '../v3';
import {PlaybackItem} from '../../types/playback';

export default {
  getHot(
    cursor: number,
    count: number,
    contentLanguage: string | undefined,
    sessionKey: string
  ): Promise<{
    playbackList: PlaybackItem[];
  }> {
    return v3('get', 'feeds/hot', {cursor, count, contentLanguage}, sessionKey);
  },
};
