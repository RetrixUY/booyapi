export interface StreamerProgramTiersItem {
  diamondAmount: number;
  followerCount: number;
  groupId: number;
  level: number;
  payAmount: number;
  streamAcu: number;
  streamDay: number;
  streamHour: number;
}

export interface StreamerProgramStats {
  deadlineTs: number;
  followerCount: number;
  groupId: number;
  level: number;
  monthStartTs: number;
  streamAcu: number;
  streamDay: number;
  streamHour: number;
}

export const defaultStreamerProgramStats: StreamerProgramStats = {
  deadlineTs: 0,
  followerCount: 0,
  groupId: 0,
  level: 0,
  monthStartTs: 0,
  streamAcu: 0,
  streamDay: 0,
  streamHour: 0
};

export interface StreamerEntryLevel {
  canJoin: boolean;
  selfFollowerCount: number;
  selfStreamAcu: number;
  selfStreamDay: number;
  selfStreamHour: number;
  thresholdFollowerCount: number;
  thresholdStreamAcu: number;
  thresholdStreamDay: number;
  thresholdStreamHour: number;
}
export interface StreamerProgramPayout {
  createTime: number;
  diamondAmount: number;
  followerCount: number;
  groupId: number;
  id: number;
  level: number;
  monthStartTs: number;
  payAmount: number;
  region: string;
  state: number;
  streamAcu: number;
  streamDay: number;
  streamHour: number;
}

export enum StreamerProgramRecordOffset {
  CURRENT_MONTH = 0,
  PREVIOUS_MONTH = 1
}

export enum StreamerProgramPayoutWithdrawStatus {
  PENDING = 0,
  PROCESSING = 1,
  REJECTED = 2,
  APPROVED = 3
}

export enum StreamerProgramWithdrawType {
  COIN = 1,
  DIAMOND = 2
}

export enum StreamerProgramPayoutStatus {
  PENDING = 0,
  ALREADY_WITHDRAW = 1
}
