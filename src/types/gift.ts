//import ImageDefaultAvatar from '../assets/images/default-avatar.png';
export enum GiftCategory {
    paid = 0,
    free = 1
  }
  
  export enum GiftType {
    Small = 0,
    Large = 3,
    Super = 4,
    Free = 5
  }
  
  export enum GiftStatus {
    RECEIVED = 0,
    DEDUCTED = 1,
    ALL = 2
  }
  
  export enum GiftLogTimeRange {
    LAST_30_DAYS = 0,
    LAST_7_DAYS = 1,
    YESTERDAY = 2,
    TODAY = 3
  }
  
  export enum GiftLogOrderType {
    BY_TIME = 0,
    BY_AMOUNT = 1
  }
  
  export type GiftReceived = {
    giftId: string;
    giftType: GiftType;
    giftAmount: number;
    coinAmount: number; 
    userId: string;
    userNickname: string;
    userAvatar: string;
    channelId: string;
    status: GiftStatus;
    timestamp: number;
  };
  
  export type Gifter = {
    avatar: string;
    coinAmount: string;
    nickname: string;
    rank: number;
    uid: number;
  };
  
  export type Gift = {
    coinAmount: number;
    description: string;
    giftId: number;
    name: string;
    pictureUrl: string;
    category: GiftCategory;
  };
  
  export type FreeGift = {
    name: string;
    pictureUrl: string;
    level: number;
    waitDuration: number;
    ticketAmount: number;
    isBlock: boolean;
    claimed: boolean;
    canClaim: boolean;
    countDown: number;
  };
  
  export const defaultGifter: Gifter = {
    avatar: '',
    coinAmount: '0',
    nickname: '',
    rank: 0,
    uid: 0
  };
  