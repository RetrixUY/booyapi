/* eslint-disable @typescript-eslint/no-explicit-any */
export type AlertConfig = {
    isChatListOpen: boolean;
    isLatestGifterOpen: boolean;
    isLootDropWinnerOpen: boolean;
    isFreeGiftOpen: boolean;
    isHostingOpen: boolean;
    isNewFollowerOpen: boolean;
    coinGift: CoinGiftConfig;
    giftRanking: GiftRankingConfig;
    alertBoxUrl: string;
    giftRankingUrl: string;
    chatListUrl: string;
    customConfigType?: AlertBannerTab;
    customConfig?: string; // "{'font_size': 16}",
  };
  
  export type StreamerAlertConfig = {
    alertConfig: AlertConfig;
    chatMsgCommonConfig: CommonConfig;
    giftRankingCommonConfig: CommonConfig;
    bannerAlertNewFollowerConfig: BannerAlertConfig;
    bannerAlertFreeGiftConfig: BannerAlertConfig;
    bannerAlertCoinGiftConfig: BannerAlertConfig;
    bannerAlertHostingConfig: BannerAlertConfig;
    bannerAlertLootdropWinnerConfig: BannerAlertConfig;
  };
  
  export type CommonConfig = {
    backgroundTransparency?: BgOpacity;
    fontSize?: FontSize;
  };
  
  export type BannerAlertConfig = {
    alertDuration: AlertDuration;
    fontSize: FontSize;
    layoutId: string;
    messageTemplate: string;
    soundName: string;
    soundUrl: string;
    customImgUrl?: string;
    customImgName?: string;
  };
  
  export enum CoinGiftConfig {
    all = 0,
    above_100 = 4,
    above_500 = 5,
    above_1000 = 1,
    above_5000 = 2,
    off = 3
  }
  
  export enum GiftRankingConfig {
    weekly = 0,
    overall = 1,
    off = 2
  }
  
  export enum BgOpacity {
    opacity_0 = 0,
    opacity_15 = 15,
    opacity_30 = 30,
    opacity_45 = 45,
    opacity_60 = 60,
    opacity_75 = 75,
    opacity_90 = 90
  }
  
  export enum FontSize {
    fontSize_12 = 12,
    fontSize_14 = 14,
    fontSize_16 = 16,
    fontSize_18 = 18
  }
  
  export enum AlertDuration {
    duration_2 = 2,
    duration_4 = 4,
    duration_6 = 6,
    duration_8 = 8,
    duration_10 = 10,
    duration_12 = 12
  }
  
  export enum BannerAlertLayoutMode {
    black = 'black',
    yellow = 'yellow'
  }
  
  export type AlertLayoutInfo = {
    id: string;
    imageUrl: string;
  };
  
  export enum AlertBannerTab {
    ChatMsg = 0,
    BannerAlertLootdropWinner = 1,
    BannerAlertNewFollower = 2,
    BannerAlertFreeGift = 3,
    BannerAlertCoinGift = 4,
    BannerAlertHosting = 5,
    GiftRanking = 6
  }
  
  export enum StreamerAlertConfigName {
    alertConfig = 'alertConfig',
    chatMsgCommonConfig = 'chatMsgCommonConfig',
    giftRankingCommonConfig = 'giftRankingCommonConfig',
    bannerAlertCoinGiftConfig = 'bannerAlertCoinGiftConfig',
    bannerAlertFreeGiftConfig = 'bannerAlertFreeGiftConfig',
    bannerAlertHostingConfig = 'bannerAlertHostingConfig',
    bannerAlertLootdropWinnerConfig = 'bannerAlertLootdropWinnerConfig',
    bannerAlertNewFollowerConfig = 'bannerAlertNewFollowerConfig'
  }
  
  export const defaultStreamerAlertConfig: StreamerAlertConfig = {
    alertConfig: {
      isChatListOpen: true,
      isLootDropWinnerOpen: true,
      isNewFollowerOpen: true,
      isFreeGiftOpen: true,
      coinGift: CoinGiftConfig.all,
      giftRanking: GiftRankingConfig.off,
      isLatestGifterOpen: true,
      isHostingOpen: true,
      alertBoxUrl: '',
      giftRankingUrl: '',
      chatListUrl: ''
    },
    chatMsgCommonConfig: {
      backgroundTransparency: BgOpacity.opacity_15
    },
    giftRankingCommonConfig: {
      backgroundTransparency: BgOpacity.opacity_15,
      fontSize: FontSize.fontSize_12
    },
    bannerAlertLootdropWinnerConfig: {
      alertDuration: AlertDuration.duration_2,
      fontSize: FontSize.fontSize_12,
      layoutId: `${BannerAlertLayoutMode.black}_1`,
      messageTemplate: 'label_message_template_lootdrop',
      soundName: '',
      soundUrl: ''
    },
    bannerAlertFreeGiftConfig: {
      alertDuration: AlertDuration.duration_2,
      fontSize: FontSize.fontSize_12,
      layoutId: `${BannerAlertLayoutMode.black}_1`,
      messageTemplate: 'label_message_template_freegift',
      soundName: '',
      soundUrl: ''
    },
    bannerAlertHostingConfig: {
      alertDuration: AlertDuration.duration_2,
      fontSize: FontSize.fontSize_12,
      layoutId: `${BannerAlertLayoutMode.black}_5`,
      messageTemplate: 'label_message_template_hosting',
      soundName: '',
      soundUrl: '',
      customImgUrl: '',
      customImgName: ''
    },
    bannerAlertNewFollowerConfig: {
      alertDuration: AlertDuration.duration_2,
      fontSize: FontSize.fontSize_12,
      layoutId: `${BannerAlertLayoutMode.black}_5`,
      messageTemplate: 'label_message_template_newfollower',
      soundName: '',
      soundUrl: '',
      customImgUrl: '',
      customImgName: ''
    },
    bannerAlertCoinGiftConfig: {
      alertDuration: AlertDuration.duration_4,
      fontSize: FontSize.fontSize_12,
      layoutId: `${BannerAlertLayoutMode.black}_1`,
      messageTemplate: 'label_message_template_coingift',
      soundName: '',
      soundUrl: '',
      customImgUrl: '',
      customImgName: ''
    }
  };
  
  export type AlertSetting = {
    configName: StreamerAlertConfigName;
    valueKey: string;
    valueType: 'boolean' | 'enum' | 'slider' | 'message' | 'sound' | 'layout';
    labelKey: string;
    descriptionKey?: string;
    menus?: {
      value: any;
      textKey: string;
    }[];
    max?: number;
    min?: number;
    step?: number | null;
    marks?: {
      [key: number]: string;
    };
    disabledKey?: string;
    hasUnderLine?: boolean;
    sysLayoutItems?: {
      mode: BannerAlertLayoutMode;
      data: AlertLayoutInfo[];
    }[];
    cusLayoutItems?: AlertLayoutInfo[];
    cusLayoutUrlKey?: string;
  };
  
  export type SoundInfo = {
    name: string;
    time: string;
    id: number;
  };
  