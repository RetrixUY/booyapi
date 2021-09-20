import { GiftType } from './gift';
import { AlertBannerTab } from './alertConfig';

export type Banner = {
  id: number;
  images: {
    url: string;
  }[];
  linkVal: string;
  type: number;
};

export interface VideoPlayerBanner {
  id: string;
  bannerName: string;
  bannerImage: string;
  userAvatar: string;
  userName: string;
  amount: number;
}

export interface ChatBanner {
  type: ChatBannerType.LuckyDraw | ChatBannerType.Gift;
  id: string;
  bannerName: string;
  bannerImage: string;
  userAvatar: string;
  userName: string;
  amount: number;
  giftType?: GiftType;
}

export enum ChatBannerType {
  LuckyDraw = 0,
  Gift = 1
}

export interface ChatCustomBanner {
  type: AlertBannerTab;
  id: string;
  bannerName?: string;
  bannerImage?: string;
  bannerCustomImage?: string;
  userAvatar?: string;
  amount?: number;
  alertDuration: number;
  fontSize: number;
  layoutId: string;
  message: string;
  soundUrl?: string;
  coinGiftAmount?: number;
}

export enum ChatCustomBannerType {
  LuckyDraw = 0,
  FreeGift = 1,
  CoinGift = 2,
  NewFollower = 3,
  Hosting = 4
}
