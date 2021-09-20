/*import videojs from 'video.js';

export interface Source extends videojs.Tech.SourceObject {
  resolution: string;
}*/

// ABR related configs
// https://github.com/video-dev/hls.js/blob/master/docs/API.md#abrewmafastlive
export type AbrConfig = {
  abrEwmaFastLive?: number;
  abrEwmaSlowLive?: number;
  abrEwmaFastVoD?: number;
  abrEwmaSlowVoD?: number;
  abrEwmaDefaultEstimate?: number;
  abrBandWidthFactor?: number;
  abrBandWidthUpFactor?: number;
  abrMaxWithRealBitrate?: boolean;
  minAutoBitrate?: number;
};

export type Mirror = {
  displayName: string;
  name: string;
  urlDomain: string;
};

export type Resolution = {
  resolution: string; // Auto, 180p, 360p, 480p, 720p
  urlPath: string;
};

// This error code is also used for Mux error reporting, it must be pure number.
// see: https://docs.mux.com/docs/custom-errors-1
export enum PlayerError {
  MANIFEST_LOAD_ERROR = '0001',
  FRAG_LOAD_ERROR = '0002',
  LEVEL_LOAD_ERROR = '0003',
  MANIFEST_LOAD_TIMEOUT = '0004',
  FRAG_LOAD_TIMEOUT = '0005',
  LEVEL_LOAD_TIMEOUT = '0006',
  MANIFEST_NOT_FOUND = '0007',
  FRAG_NOT_FOUND = '0008',
  LEVEL_NOT_FOUND = '0009',
  UNKNOWN = '0010',
}

export type ControllerMode = 'full' | 'mini';
