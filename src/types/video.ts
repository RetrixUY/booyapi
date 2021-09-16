// Video refers to VOD, Hightlight and Clip
export enum VideoType {
  VOD = 'vod',
  CLIP = 'clip',
  HIGHLIGHT = 'hightlight'
}

// video type from server side
export enum VideoFilterType {
  VOD = 1,
  HIGHLIGHT = 2,
  CLIP = 4,
  HIGHLIGHT_DEMO = 8,
  VIDEO = 16, // uploaded vod by user

  // combination values
  HIGHLIGHT_AND_DEMO = VideoFilterType.HIGHLIGHT |
    VideoFilterType.HIGHLIGHT_DEMO, // 10
  VOD_AND_VIDEO = VideoFilterType.VOD | VideoFilterType.VIDEO // 17
}

export enum VideoFormat {
  MP4 = 'video/mp4',
  HLS = 'application/x-mpegURL'
}

export interface VideoTab {
  id: string;
  name: string;
  videoType: VideoType; // used for video card category
  filterType: VideoFilterType; // used to load playback list and playback counts, to send to server as query param
  emptyImage: string;
  emptyImageDarkMode: string;
  count: number;
}

export type MuxVideoType = 'live' | 'clip' | 'highlight' | 'vod';

export interface VideoUploadParam {
  lang: string;
  storeBucket: string;
  thumbnailPath: string;
  title: string;
}

export interface VodUploadParam extends VideoUploadParam {
  gameBuildId: number;
  videoPath: string;
}

export interface ClipUploadParam extends VideoUploadParam {
  clipPath: string;
  campaignId?: number;
  tagUniqList?: string[];
}
