/*
  Each type of notification is consist of 3 parts
  1. type, indicates the notification type
  2. data, the payload returned along with the notification, each type has a different data structure.
      Defined here https://confluence.garenanow.com/pages/viewpage.action?pageId=83003370
  3. extra, the extra data returned along with "GET /users/{uid}/push-messages" api, re-organized by frontend according to the needs of each type.
*/


import { VideoFilterType } from './video';

// https://confluence.garenanow.com/pages/viewpage.action?pageId=83003370
export enum NotificationType {
  HighlightReady = 1,
  HighlightFailed = 2,
  VideoLiked = 100,
  ClipCommented = 102,
  StartStreaming = 200,
  RedirectUrl = 300,
  ChatGiftRedeem = 403, // only for users currently in chatroom
  UserFollow = 500,
  UserMuted = 501,
  UserBanned = 502,
  ClipCommentReplied = 600,
  ClipCommentLiked = 601,
  GiftRedeem = 701, // for all eligible users
  StreamerFFLuckyDraw = 800, // triggered by streamer, only eligible for users who are currently in chatroom and have bound their ff account
  FirstTimeFreeGiftReward = 801,
  BindFFForReward = 802,
  WinRealLifePrize = 803,
  BindFFAccountNow = 804,
  RewardExpiring = 805,
  CashCoin = 806,
  ClanApplicationApproved = 901,
  ClanApplicationRejected = 902
}

// https://confluence.garenanow.com/pages/viewpage.action?pageId=83003370
// This type is used on web page, top right corner, the notification list in header
export type Notification = (
  | Highlight
  | RedirectUrl
  | VideoLiked
  | ClipCommented
  | UserFollow
  | UserMuted
  | UserBanned
  | ClipCommentReplied
  | ClipCommentLiked
  | GiftRedeem
  | ChatGiftRedeem
  | StreamerFFLuckyDraw
  | FirstTimeFreeGiftReward
  | BindFFForReward
  | WinRealLifePrize
  | BindFFAccountNow
  | RewardExpiring
  | ClanApplicationNotification
  | CashCoin
) & {
  msgId: string;
  createdTime: number;
};

export type Highlight = {
  type: NotificationType.HighlightReady | NotificationType.HighlightFailed;
  data: {
    playbackId: string;
  };
  extra: {
    url: string;
  };
};

export type VideoLiked = {
  type: NotificationType.VideoLiked;
  data: {
    count: number;
    playbackType: VideoFilterType;
    uids: number[];
    playbackUuid: string;
  };
  extra: {
    username: string;
    userAvatar: string;
    videoTitle: string;
    url: string;
  };
};

export type ClipCommented = {
  type: NotificationType.ClipCommented;
  data: {
    uid: number;
    targetType: number;
    targetId: string;
  };
  extra: {
    username: string;
    userAvatar: string;
    videoTitle: string;
    url: string;
  };
};

export type StartStreaming = {
  type: NotificationType.StartStreaming;
  data: {
    channelId: number;
    nickname: string;
    customMsg: string;
  };
};

export type RedirectUrl = {
  type: NotificationType.RedirectUrl;
  data: {
    url: string;
  };
};

export type UserFollow = {
  type: NotificationType.UserFollow;
  data: {
    uid: string;
  };
  extra: {
    username: string;
    userAvatar: string;
  };
};

export type UserMuted = {
  type: NotificationType.UserMuted;
  data: {
    message: string;
    title: string;
  };
};

export type UserBanned = {
  type: NotificationType.UserBanned;
  data: {
    expiry: number;
    reason: string;
  };
};

export type ClipCommentReplied = {
  type: NotificationType.ClipCommentReplied;
  data: {
    toCommentId: number;
    uid: number;
    targetId: string;
  };
  extra: {
    username: string;
    userAvatar: string;
    commentContent: string;
    url: string;
  };
};

export type ClipCommentLiked = {
  type: NotificationType.ClipCommentLiked;
  data: {
    commentId: number;
    latestUid: number;
    targetId: string;
    otherCount: number;
  };
  extra: {
    username: string;
    userAvatar: string;
    count: number;
    commentContent: string;
    url: string;
  };
};

export type GiftRedeem = {
  type: NotificationType.GiftRedeem;
  data: {
    nickname: string;
    itemCode: string;
    linkUrl: string;
  };
};

export type ChatGiftRedeem = {
  type: NotificationType.ChatGiftRedeem;
  data: {
    nickname: string;
    channelName: string;
    redeemCode: string;
    redeemUrl: string;
  };
};

export type FirstTimeFreeGiftReward = {
  type: NotificationType.FirstTimeFreeGiftReward;
  data: {
    prizeIcon: string;
    prizeName: string;
    reason: string;
  };
};

export type StreamerFFLuckyDraw = {
  type: NotificationType.StreamerFFLuckyDraw;
  data: {
    nickname: string;
    channelName: string;
    prizeName: string;
    prizeIcon: string;
  };
};

export type BindFFForReward = {
  type: NotificationType.BindFFForReward;
  data: {
    action: string;
    prizeName: string;
  };
};

export type WinRealLifePrize = {
  type: NotificationType.WinRealLifePrize;
  data: {
    eventName: string;
    prizeName: string;
    itemPicUrl: string;
    prizeId: number;
  };
};

export type BindFFAccountNow = {
  type: NotificationType.BindFFAccountNow;
  data: {
    prizeName: string;
    prizeIcon: string;
    eventName: string;
    ffLoginUrl: string;
  };
};

export type RewardExpiring = {
  type: NotificationType.RewardExpiring;
  data: {
    expiryTime: number;
    ffLoginUrl: string;
  };
};

export type ClanApplicationNotification = {
  type:
    | NotificationType.ClanApplicationApproved
    | NotificationType.ClanApplicationRejected;
  data: {
    clanName: string;
    applicationCooldownTime?: number;
  };
};

export type CashCoin = {
  type: NotificationType.CashCoin;
  data: {
    prizeIcon: string;
    prizeName: string;
    rank: string;
    reason: string;
  };
};
