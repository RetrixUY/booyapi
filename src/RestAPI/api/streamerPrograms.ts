import { apiv3 } from '..';
import { StreamerProgramTiersItem } from '../../types/streamerProgram';
import { PlaybackItem } from '../../types/playback';

export default {
  getTiers(sessionKey: string): Promise<{
    currency: string;
    tierList: StreamerProgramTiersItem[];
  }> {
    return apiv3('get', `streamer-programs/tiers`,{},sessionKey);
  },
  getProgramAcedemy(sessionKey: string): Promise<PlaybackItem> {
    return apiv3('get', 'streamer-programs/academy',{},sessionKey);
  }
};
