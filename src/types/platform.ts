export enum LoginPlatform {
  facebook = 3,
  vk = 5,
  line = 6,
  google = 8,
  apple = 10,
  twitter = 11,
}

export enum SessionPlatform {
  pc_web = 3,
  mobile_web = 4,
  ios_webview = 5, // ios booyah app webview
  android_webview = 6, // android booyah app webview
  ios_game = 7, // ios booyah app embedded in standalone game
  android_game = 8, // android booyah app embedded in standalone game
}

export enum ClientPlatform {
  UNKNOWN = 0,
  IOS_WEB = 5,
  ANDROID_WEB = 6,
  PC_WEB = 7,
  EMBEDDED_IOS_WEB = 8,
  EMBEDDED_ANDROID_WEB = 9,
  EMBEDDED_PC_WEB = 10,
  EMBEDDED_IOS_GAME = 11,
  EMBEDDED_ANDROID_FF = 12,
  INTERNAL_IOS_WEB = 1005,
  INTERNAL_ANDROID_WEB = 1006,
  INTERNAL_PC_WEB = 1007,
  INTERNAL_EMBEDDED_IOS_WEB = 1008,
  INTERNAL_EMBEDDED_ANDROID_WEB = 1009,
  INTERNAL_EMBEDDED_PC_WEB = 1010,
  INTERNAL_EMBEDDED_IOS_GAME = 1011,
  INTERNAL_EMBEDDED_ANDROID_FF = 1012,
}

export enum SharingPlatform {
  FACEBOOK = 0,
  MESSENGER = 1,
  WHATSAPP = 2,
  INSTAGRAM = 3,
  TWITTER = 4,
  LINE = 5,
  VK = 6,
  URL = 1000,
  DOWNLOAD = 1001,
  MORE = 1002,
}

export enum BannerPlatform {
  default = 0,
  ios = 1,
  android = 2,
  web = 4,
  standalone_ff = 8,
}

// see platform definition here: http://test.connect.booyah.live:9510/swagger/index.html
export enum StreamingPlatform {
  booyah = 0,
  youtube = 1,
  facebook = 3,
}

export enum SocialPlatform {
  facebook = 'facebook',
  youtube = 'youtube',
  instagram = 'instagram',
  twitter = 'twitter',
}
