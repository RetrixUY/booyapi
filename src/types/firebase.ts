export enum StorageNamespace {
  bugReport = 'Web/Bug_Report',
  avatar = 'Web/Avatar',
  vod = 'playback/Video',
  clip = 'Clip', // backend requires starting with "Clip"
  highlight = 'playback/Highlight',
  withdraw = 'Web/Withdraw',
  clipThumbnail = 'playback/Clip', // backend requires "playback/Clip"
  streamThumbnail = 'Channel/Thumbnail', // backend requires "Channel/"
  chatAlert = 'Web/ChatAlert'
}
