import {SharingPlatform} from './platform';
import {PlaybackStats} from './playback';

export interface ClientEvent {
  data?: AddEventType | SendEventType;
  ts: number;
  type: EventType;
  sessionId: string;
  activeUsageId: string;
}

export enum FlushType {
  TEN_SECONDS = 1,
  ONE_MINUTE = 2,
  STREAM_END = 3,
}

export type StreamStall = {
  stallStart: number;
  stallEnd: number;
  selectedResolution: string;
  playResolution: number;
  selectedMirror: string;
};

export type PlaybackStall = {
  stallStart: number;
  stallEnd: number;
  playResolution: number;
};

export type PlaybackError = {
  viewDuration: number;
  errorCode: string;
  errorDomain: string;
  errorMsg: string;
};

export enum EventStatus {
  SUCCESS = 0,
  FAILED = 1,
}

export type M3U8 = {
  url: string;
  size: number;
  downloadTime: number; // number in milliseconds
  startTime: number; // number in milliseconds
};

export type TS = {
  url: string;
  size: number; // ts size in KB
  duration: number; // float in seconds
  downloadTime: number; // number in milliseconds
  startTime: number; // number in milliseconds
};

export enum EventType {
  APP_GO_BACKGROUND = 'app_go_background',
  APP_GO_FOREGROUND = 'app_go_foreground',
  USER_LOGIN = 'user_login',
  USER_LOGOUT = 'user_logout',
  HIGHLIGHT_DOWNLOAD = 'highlight_download',
  HIGHLIGHT_SHARE = 'highlight_share',
  HIGHLIGHT_VIEW = 'highlight_view',
  CLIP_DOWNLOAD = 'video_download',
  CLIP_LIKE = 'video_like',
  CLIP_SHARE = 'video_share',
  CLIP_UNLIKE = 'video_unlike',
  CLIP_VIEW = 'video_view',
  CLIP_DISPLAY = 'video_display',
  VOD_DELETE = 'vod_delete',
  VOD_DOWNLOAD = 'vod_download',
  VOD_LIKE = 'vod_like',
  VOD_PUBLISH = 'vod_publish',
  VOD_SHARE = 'vod_share',
  VOD_UNLIKE = 'vod_unlike',
  VOD_VIEW = 'vod_view',
  CHAT_SEND = 'chat_send',
  STREAM_SHARE = 'stream_share',
  STREAM_VIEW = 'stream_view',
  STREAM_QUALITY_STALL = 'watch_stream_stalls',
  STREAM_QUALITY_STARTUP = 'watch_stream_startup',
  STREAM_QUALITY_GIVEUP = 'user_watch_give_up',
  STREAM_ERROR = 'watch_stream_error',
  BANNER_CLICK = 'banner_click',
  BANNER_VIEW = 'banner_view',
  HLS_DOWNLOAD = 'hls_download',
  AUTO_RESOLUTION_CHANGE = 'watch_stream_auto_resolution_change',
  PARTY_UP_CLICK = 'party_up_click',
  ACTIVE_SESSION = 'report_active_session',
  PUSH_NOTIFICATION_RECEIVE = 'push_notif_received',
  PUSH_NOTIFICATION_CLICK = 'push_notif_opened',
  PUSH_NOTIFICATION_ACCESS = 'push_notif_access',
}

// https://confluence.garenanow.com/pages/viewpage.action?spaceKey=MAMBET&title=Source+Definition+and+screenshot
export enum EventSource {
  UNKNOWN = 0,
  CLIP_FEED = 1, // only for "follow" event
  CHANNEL = 2,
  PROFILE = 3, // studio page
  CLIP_WATCH = 4, // clip playback page
  HIGHLIGHT_WATCH = 5, // highlight playback page
  DASHBOARD = 6,
  RECOMMENDED_STREAMER = 7,
  SEARCH = 8,
  CHAT = 9,
  COMMENT = 10,
  RANKINGS = 11,
  CLIP_SEARCH = 12, // for mobile app use only
  CLAN = 13,
  BANNER = 14,
  NEWS = 15,
  STREAM_EVENT_PAGE = 16,
  CLIP_CAMPAIGN_PAGE = 17,
  PERSONAL_LIKED_VIDEO = 19,
  OTHERS_LIKED_VIDEO = 20,
  HOMEPAGE = 21,
  HOMEPAGE_MORE = 22,
  VOD_WATCH = 23,
  NOTIFICATION = 24,
  FEEDS_WATERFALL = 25,
  FEEDS_SCROLL = 26,
  HOMEPAGE_CAROUSEL = 27,
  HOMEPAGE_CHNNLS_U_MAY_LIKE = 28,
  HOMEPAGE_CHNNLS_U_MAY_LIKE_MORE = 29,
  HOMEPAGE_IRL = 30,
  FOLLOWING_PAGE = 31,
  GAMES_DETAIL = 32,
  CHNNLS_LEFT_BAR_FOLLOWING = 33,
  CHNNLS_LEFT_BAR_RECOMMENDED = 34,
  HOSTING_LIST = 35,
  HOSTING_IN_CHANNEL = 36,
  HOSTING_FOLLOWING_PAGE = 37,
  STANDALONE_LIVEPLAYER = 38,
  STANDALONE_GAME = 39,
  STANDALONE_CHANNEL = 40, // loading tv
  STANDALONE_VOD = 42,
  FOLLOWER_USER_LIST = 43,
  FOLLOWING_USER_LIST = 44,
}

// chat events
export interface ChatSendEventType {
  chatRoomId: number;
  totalChatMsg: number;
}

export interface BannerClickEventType {
  bannerId: number;
  bannerType: number;
}

export type BannerViewEventType = BannerClickEventType;

export interface PartyUpClickEventType {
  channelId: number;
  gameId: number;
  gameUrl: string;
}

// forebackground event
export interface BackgroundEventType {
  activeUsageDuration: number;
}

// report active session event
export interface ActiveSessionEventType {
  duration: number;
}

// vod events
export interface VodDownloadEventType {
  vodId: string;
  vodSize: number;
  vodLength: number;
  gameBuildId: number;
}

export interface VodShareEventType {
  vodId: string;
  sharingPlatform: SharingPlatform;
  gameBuildId: number;
}

export interface VodLikeEventType {
  vodId: string;
  gameBuildId: number;
}

export interface VodPublishEventType {
  vodId: string;
  gameBuildId: number;
  vodLength: number;
  status: EventStatus;
}

// clip events
export interface ClipViewEventType {
  videoId: string;
  viewDuration: number;
  videoLength: number;
  videoDisplayType: number;
  gameBuildId: number;
  stats: PlaybackStats;
  feedPosition: number;
  playResolution: number;
  domain: string;
  startupDuration: number;
  stalls: PlaybackStall[];
  errors: PlaybackError[];
}

export interface ClipDownloadEventType {
  videoId: string;
  status: EventStatus;
  videoSize: number;
  videoLength: number;
  videoDisplayType: number;
  gameBuildId: number;
}

export interface ClipShareEventType {
  videoId: string;
  sharingPlatform: SharingPlatform;
  videoDisplayType: number;
  gameBuildId: number;
}

export interface ClipLikeEventType {
  videoId: string;
  videoDisplayType: number;
  gameBuildId: number;
}
export interface ClipDisplayEventType {
  source: EventSource;
  feedPosition: number;
  stats: PlaybackStats;
}

// highlight events
export interface HighlightViewEventType {
  highlightId: string;
  viewDuration: number;
  gameBuildId: number;
  highlightLength: number;
  stats: PlaybackStats;
}

export interface HighlightDownloadEventType {
  highlightId: string;
  status: EventStatus;
  size: number;
  length: number;
  gameBuildId: number;
}

export interface HighlightShareEventType {
  highlightId: string;
  sharingPlatform: SharingPlatform;
  gameBuildId: number;
}

// stream events
export interface StreamViewEventType {
  channelId: number;
  gameBuildId: number;
  viewDuration: number;
}

export interface HLSDownloadEventType {
  channelId: number;
  ts: TS[];
  m3u8: M3U8[];
}

export interface StreamQualityStallEventType {
  watchChannelId: number;
  stalls: StreamStall[];
  watchDuration: number;
  selectedResolution: string;
  playResolution: number;
  selectedMirror: string;
  domain: string;
  type: FlushType;
}

export interface StreamQualityStartupEventType {
  watchChannelId: number;
  domain: string;
  startupDuration: number;
  selectedResolution: string;
  selectedMirror: string;
  playResolution: number;
}

export interface StreamQualityGiveupEventType {
  watchChannelId: number;
  stalls: StreamStall[];
  waitingDuration: number;
  selectedResolution: string;
  selectedMirror: string;
  domain: string;
}

export interface StreamShareEventType {
  channelId: number;
  sharingPlatform: number;
  gameBuildId: number;
  source: EventSource;
}

export interface StreamErrorEventType {
  watchChannelId: number;
  domain: string;
  selectedResolution: string;
  playResolution: number;
  errorCode: string;
  errorDomain: string;
  errorMsg: string;
}

export interface PushNotificationEventType {
  msgId: string;
  fromUid: number; // the starting streamer's channelId, 0 for other notification types
  type: number;
  title: string;
  message: string;
  notifSource: string;
}

export interface PushNotificationAccessEventType {
  accessStatus: 0 | 1; // 0: not granted; 1: granted
}

export type SendEventType =
  | BackgroundEventType
  | ActiveSessionEventType
  | PartyUpClickEventType
  | HLSDownloadEventType
  | VodShareEventType
  | VodLikeEventType
  | VodPublishEventType
  | ClipViewEventType
  | ClipShareEventType
  | ClipLikeEventType
  | ClipDisplayEventType
  | HighlightViewEventType
  | HighlightShareEventType
  | StreamQualityStartupEventType
  | StreamQualityStallEventType
  | StreamQualityGiveupEventType
  | StreamShareEventType
  | StreamErrorEventType
  | StreamViewEventType
  | PushNotificationEventType
  | PushNotificationAccessEventType;

export type AddEventType =
  | ChatSendEventType
  | BannerClickEventType
  | BannerViewEventType
  | VodDownloadEventType
  | ClipDownloadEventType
  | HighlightDownloadEventType;
