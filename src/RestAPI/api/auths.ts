import v3 from '../v3';
import {AxiosResponse} from 'axios';

// Store the sessionHeader in memory, as a fallback of cookie session_key.
// The reason is that we encounter some cases where cookie isn't available.
// For those cases, we get the sessionHeader from /auths/sessions api response header, and keep it in memory, and post it back
// in custom http header "Booyah-Session-Key"
// See the original ticket https://jira.garenanow.com/browse/GLIVE-8899?focusedCommentId=680517&page=com.atlassian.jira.plugin.system.issuetabpanels%3Acomment-tabpanel#comment-680517

export default {
  login: {
    post(
      deviceId: string,
      gopToken: string,
      language: string, // UI language,
      sessionKey: string
    ): Promise<{uid: number}> {
      return v3(
        'post',
        'auths/login',
        {
          deviceId,
          gopToken,
          language,
          platform: 3,
        },
        sessionKey
      );
    },
  },
  logout: {
    post(sessionKey: string): Promise<void> {
      return v3('post', 'auths/logout', {}, sessionKey);
    },
  },
  sessions: {
    post(
      deviceId: string,
      language: /* UI language */ string,
      sessionKey: string
    ): Promise<{expiryTime: number}> {
      return v3(
        'post',
        'auths/sessions',
        {
          deviceId,
          language,
          platform: 3,
        },
        sessionKey,
        {}
      ).then((res: AxiosResponse) => {
        return res.data;
      });
    },
  },
};
