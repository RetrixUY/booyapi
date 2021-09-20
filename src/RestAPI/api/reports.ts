import v3 from '../v3';
import {ClientEvent} from '../../types/clientEvents';
//import ClientCache from 'utils/cache/Client';
import {Reason, Type as ReportType} from '../../types/report';
import {StreamingPlatform} from '../../types/platform';

export default {
  // type: 0 clip, 1 channel, 2 chat
  // reportedSource:
  post(
    uid: number,
    type: ReportType,
    refId: string | number,
    reason: number,
    sessionKey: string,
    reportedUid?: string,
    reportedSource?: StreamingPlatform
  ): Promise<void> {
    return v3(
      'post',
      'reports',
      {
        reason,
        refId: refId.toString(),
        uid,
        type,
        reportedUid: reportedUid ? reportedUid.toString() : undefined,
        reportedSource,
        appLang: '', //ClientCache.uiLanguage
      },
      sessionKey
    );
  },
  bugs: {
    post(
      userUID: number,
      description: string,
      email: string,
      eventTime: number,
      logFileList: string[],
      screenshotsList: string[],
      sessionKey: string
    ): Promise<void> {
      return v3(
        'post',
        'reports/bugs',
        {
          uid: userUID,
          description,
          email,
          logFileList,
          screenshotsList,
          eventTime,
        },
        sessionKey
      );
    },
  },
  feedbacks: {
    post(
      userUID: number,
      description: string,
      email: string,
      screenshotsList: string[],
      sessionKey: string
    ): Promise<void> {
      return v3(
        'post',
        'reports/feedbacks',
        {
          uid: userUID,
          description,
          email,
          screenshotsList,
          language: '', //ClientCache.uiLanguage
        },
        sessionKey
      );
    },
  },
  clientEvents: {
    post(
      deviceId: string,
      language: string | null, // UI language
      platform: number,
      uid: number,
      events: ClientEvent[],
      contentLanguage: string | undefined,
      sessionKey: string
    ): Promise<{rspTs: number}> {
      return v3(
        'post',
        'reports/client-events',
        {
          clientVersion: 'web',
          deviceId,
          events,
          language,
          platform,
          uid,
          contentLanguage,
        },
        sessionKey
      );
    },
  },
  clientHeartbeat: {
    post(sessionKey: string): Promise<void> {
      return v3('post', 'reports/client-heartbeats', {}, sessionKey);
    },
  },
  embedConnects: {
    post(
      channelId: number,
      deviceId: string,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'post',
        'reports/embed-connects',
        {
          channelId,
          deviceId,
          uid: deviceId,
        },
        sessionKey
      );
    },
  },
  embedHeartbeat: {
    post(
      channelId: number,
      deviceId: string,
      sessionKey: string
    ): Promise<void> {
      return v3(
        'post',
        'reports/embed-heartbeats',
        {
          channelId,
          deviceId,
          uid: deviceId,
        },
        sessionKey
      );
    },
  },
  comments: {
    post(
      params: {
        commentId: number;
        reason: Reason;
        targetId: string; // playback uuid
        targetType: number; // 0 for clip
      },
      sessionKey: string
    ): Promise<void> {
      return v3('post', 'reports/comments', params, sessionKey);
    },
  },
};
