export interface ICustomCard {
    id: string;
    title: string,
    description: string,
    img: string,
    link: string,
    date: string,
};

export interface IYoutubeVideo {
  id: string;
  title: string,
  description: string,
  img: string,
  link: string,
  date: string,
  viewCount: string,
  likeCount: string,
  dislikeCount: string,
  commentCount: string
};

export interface State {
 cards: ICustomCard[];
 videos: IYoutubeVideo[];
};
