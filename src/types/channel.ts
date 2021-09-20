export type Channel = {
  channelId: number;
  alias?: string;
  chatroomId: number;
  description: string;
  name: string;
  playbackCnt: number;
  isVerifiedStreamer: boolean;
  isEnableVod: boolean; // channel flag: temporaryStoreVod || permanentStoreVod
  isEnableDownloadVod: boolean;
  isEnableLongClip: boolean;
  isEnableLuckyDraw: boolean;
  isStreaming: boolean;
  isContentCreator: boolean;
  lastGiftTime?: number;
  shareUrl: string;
  thumbnail?: string;
  flag: number; // enableUploadVod = !!(flag & 512); enableHosting = !!(flag & 1024);
  hostee?: unknown;
  labelContent?: string;
  labelName?: string;
  createTime: number;
  socialLinks: [];
};
