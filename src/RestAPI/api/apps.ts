import { apiv3 } from "..";
import { Banner } from "../../types/banner";
import { BannerPlatform } from "../../types/platform";
import { ServerConfig } from "../../types/util";

export default {
  banners: {
    get(
      lang: string,
      platform: BannerPlatform,
      sessionKey: string,
    ): Promise<{ banners: Banner[] | null }> {
      return apiv3('get', 'apps/banners', {
        lang,
        type: 3, // type: 1: splash(default), 2: popup, 3: carousel
        platform
      },sessionKey);
    }
  },
  configs: {
    get(sessionKey: string): Promise<ServerConfig> {
      return apiv3('get', 'apps/configs',{},sessionKey);
    }
  }
};
