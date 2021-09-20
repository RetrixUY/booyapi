import v3 from '../v3';
import {ReplyComment} from '../../types/comment';

export default {
  post(
    params: {
      targetId: string; // playback uuid
      targetType: number; // 0 for clip
      toCommentId: number;
      content: string;
    },
    sessionKey: string
  ): Promise<{commentId: number}> {
    return v3('post', 'comments', params, sessionKey);
  },
  delete(
    commentId: number,
    params: {
      targetId: string;
      targetType: number;
    },
    sessionKey: string
  ): Promise<void> {
    return v3('delete', `comments/${commentId}`, params, sessionKey);
  },
  getReplies(
    commentId: number,
    params: {
      targetId: string;
      cursor: number;
      count: number;
    },
    sessionKey: string
  ): Promise<{commentList: ReplyComment[]; nextCursor: number}> {
    return v3('get', `comments/${commentId}/replies`, params, sessionKey);
  },
  like: {
    post(
      commentId: number,
      params: {
        targetId: string;
        targetType: number;
      },
      sessionKey: string
    ): Promise<{likes: number}> {
      return v3('post', `comments/${commentId}/likes`, params, sessionKey);
    },
    delete(
      commentId: number,
      params: {
        targetId: string;
        targetType: number;
      },
      sessionKey: string
    ): Promise<{likes: number}> {
      return v3('delete', `comments/${commentId}/likes`, params, sessionKey);
    },
  },
};
