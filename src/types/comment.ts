interface Attachment {
  type: number;
  url: string;
}

export enum Status {
  NORMAL = 0,
  DELETED = 1
}

export interface BaseComment {
  attachment: Attachment[];
  commentId: number;
  content: string;
  createTime: number;
  fromNickname: string;
  fromThumbnail: string;
  fromUid: number;
  isLike: boolean;
  isVerifiedStreamer: boolean;
  isContentCreator: boolean;
  likeCnt: number;
  replyNextCursor: number;
  replyCnt: number;
  status: Status;
}

export interface Comment extends BaseComment {
  replyCommentList: ReplyComment[];
}

export interface ReplyComment extends BaseComment {
  toNickname: string;
  toUid: number;
}

export type CommentOrReply = Comment | ReplyComment;

export const defaultBaseComment: BaseComment = {
  attachment: [],
  commentId: 0,
  content: '',
  createTime: 0,
  fromNickname: '',
  fromThumbnail: '',
  fromUid: 0,
  isLike: false,
  isVerifiedStreamer: false,
  isContentCreator: false,
  likeCnt: 0,
  replyNextCursor: 0,
  replyCnt: 0,
  status: Status.NORMAL
};

export const defaultComment: Comment = {
  ...defaultBaseComment,
  replyCommentList: []
};

export const defaultReplyComment: ReplyComment = {
  ...defaultBaseComment,
  toNickname: '',
  toUid: 0
};
