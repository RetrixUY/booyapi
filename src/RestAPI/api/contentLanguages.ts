import { apiv3 } from '..';

export default {
  get(sessionKey:string): Promise<{
    contentLangList: {
      code: string;
      name: string;
    }[];
  }> {
    return apiv3('get', 'content-languages',{},sessionKey);
  },
  getDefault(systemLanguage: string,sessionKey:string): Promise<{ contentLang: string }> {
    return apiv3('get', 'content-languages/default', {
      sysLang: systemLanguage
    },sessionKey);
  }
};
