import v3 from '../v3';
import {StreamerProgramTiersItem} from '../../types/streamerProgram';
import {PlaybackItem} from '../../types/playback';

export default {
  getTiers(sessionKey: string): Promise<{
    currency: string;
    tierList: StreamerProgramTiersItem[];
  }> {
    return v3('get', 'streamer-programs/tiers', {}, sessionKey);
  },
  getProgramAcedemy(sessionKey: string): Promise<PlaybackItem> {
    return v3('get', 'streamer-programs/academy', {}, sessionKey);
  },
};
