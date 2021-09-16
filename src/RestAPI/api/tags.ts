/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiv3 } from '..';
//import { Tag, ContentTag } from '../../types/tag';

export default {
  get(lang: string | undefined,sessionKey: string): Promise<{ tagList: any[] }> {
    return apiv3('get', `tags?lang=${lang}`,{},sessionKey);
  },
  getContentTags(sessionKey: string): Promise<{ tagList: any[] }> {
    return apiv3('get', 'content-tags',{},sessionKey);
  }
};
