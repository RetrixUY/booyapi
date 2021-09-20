import v3 from '../v3';

export default {
  facebook: {
    auth: {
      post(accessToken: string, sessionKey: string): Promise<void> {
        return v3(
          'post',
          'callbacks/facebook/auth',
          {
            accessToken,
          },
          sessionKey
        );
      },
    },
  },
};
