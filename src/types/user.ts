import { LoginPlatform, StreamingPlatform } from './platform';

export type User = {
  uid: number;
  nickname: string;
  thumbnail: string;
  followTime: number;
  followerCount: number;
  followingCount: number;
  notification: 0 | 1;
  nicknameNextUpdateTime: number;
  clanId?: number;
  gender: UserGender;
  genderNextUpdateTime: number;
  birthday: number;
  age: number;
  platform: LoginPlatform;
};

export type ModeratorUser = {
  uid: number;
  nickName: string;
  createTime: number;
};

export type StaffUser = {
  uid: number;
  createTime: number;
};

export type BannedUser = {
  uid: number;
  nickName: string;
  createTime: number;
  moderatorId: number;
  moderatorNickName: string;
  source: StreamingPlatform; //  0: MAMBETTV, 1: YOUTUBE, 3:FACEBOOK
};

export enum BanningSource {
  None = -1,
  Others = 0,
  PornDetectionEmail = 1,
  UserReport = 2,
  ManualChecking = 3,
  IpTakedownEmail = 4
}

export enum ModerateContent {
  DeleteAllVods = 0,
  DeleteAllHighlights = 1,
  DeleteAllClips = 2,
  DeleteAllUploadedVideos = 3,
  ResetUserInfo = 4
}

export type BlockedUser = {
  blockedUid: string;
  nickname: string;
  source: StreamingPlatform; //  0: MAMBETTV, 1: YOUTUBE, 3:FACEBOOK
};

export enum UserGender {
  NotSet = 0,
  Male = 1,
  Female = 2,
  Others = 3,
  KeepSecret = 4
}

