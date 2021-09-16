import { apiv3 } from '..';

export default {
  facebook: {
    auth: {
      post(accessToken: string,sessionKey:string): Promise<void> {
        return apiv3('post', 'callbacks/facebook/auth', {
          accessToken
        },sessionKey);
      }
    }
  }
};
