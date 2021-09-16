/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiv3 } from '..';
import { PlaybackItem } from '../../types/playback';
//import { Profile } from '../../types/profile';
import { SearchType } from '../../types/search';

export default {
  getRecommendedTerms(
    lang: string,sessionKey: string,
    count?: number
  ): Promise<{ termList: string[] }> {
    return apiv3('get', 'searches/recommended-terms', { lang, count },sessionKey);
  },
  getSearches(
    lang: string,
    term: string,sessionKey: string,
    type?: SearchType,
    cursor?: number,
    count?: number
  ): Promise<{
    channelSearchRes?: {
      nextCursor: number;
      resItemList: any[];
    };
    clipSearchRes?: {
      nextCursor: number;
      resItemList: PlaybackItem[];
    };
    highlightSearchRes?: {
      nextCursor: number;
      resItemList: PlaybackItem[];
    };
  }> {
    return apiv3('get', 'searches/searches', {
      lang,
      term,
      type,
      cursor,
      count
    },sessionKey);
  }
};
