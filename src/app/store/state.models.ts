export class CardState {
  public cards: {
    title: string,
    description: string,
    img: string,
    link: string,
    data: string
  }[] = [];
  public videos: {
    title: string,
    description: string,
    img: string,
    data: string,
    viewCount: string,
    likeCount: string,
    dislikeCount: string,
    commentCount: string
  }[] = [];
}
