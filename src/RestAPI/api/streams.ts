import v3 from '../v3';
import {StreamItem} from '../../types/stream';
//import ClientCache from '../../utils/cache/Client';

export default {
  getHomepage(
    lang: string | undefined,
    sessionKey: string
  ): Promise<{
    pinnedChannelId: number;
    streamList: StreamItem[];
  }> {
    return v3('get', 'streams/homepage', {lang}, sessionKey);
  },
  get(
    params: {
      cursor: number;
      count: number;
      tagUniq?: string;
      gameId?: number;
    },
    sessionKey: string
  ): Promise<{
    cursor: number;
    streamList: StreamItem[];
  }> {
    return v3(
      'get',
      'streams',
      {
        ...params,
        lang: '', //ClientCache.contentLanguage
      },
      sessionKey
    );
  },
  getVerifiedStreams(
    params: {
      cursor: number;
      count: number;
      tagUniq?: string;
      gameId?: number;
    },
    sessionKey: string
  ): Promise<{
    cursor: number;
    streamList: StreamItem[];
  }> {
    return v3(
      'get',
      'verified-streams',
      {
        ...params,
        lang: '', //ClientCache.contentLanguage
      },
      sessionKey
    );
  },
};
