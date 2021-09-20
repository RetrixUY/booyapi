/* eslint-disable @typescript-eslint/no-explicit-any */
import v3 from '../v3';
//import { Tag, ContentTag } from '../../types/tag';

export default {
  get(lang: string | undefined, sessionKey: string): Promise<{tagList: any[]}> {
    return v3('get', `tags?lang=${lang}`, {}, sessionKey);
  },
  getContentTags(sessionKey: string): Promise<{tagList: any[]}> {
    return v3('get', 'content-tags', {}, sessionKey);
  },
};
