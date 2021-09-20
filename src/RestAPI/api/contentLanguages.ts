import v3 from "../v3";

export default {
  get(sessionKey:string): Promise<{
    contentLangList: {
      code: string;
      name: string;
    }[];
  }> {
    return v3('get', 'content-languages',{},sessionKey);
  },
  getDefault(systemLanguage: string,sessionKey:string): Promise<{ contentLang: string }> {
    return v3('get', 'content-languages/default', {
      sysLang: systemLanguage
    },sessionKey);
  }
};
