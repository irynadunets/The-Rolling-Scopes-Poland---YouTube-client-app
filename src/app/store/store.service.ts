import { Injectable } from '@angular/core';
import { Store } from './store';
import { CardState } from './state.models';

@Injectable()
export class CardStoreService extends Store<CardState> {
  constructor() {
    super(new CardState());
  }

public addCard(title: string, description: string, img: string, link: string, data: string): void {
  this.setState({
    ...this.state,
    cards: [...this.state.cards,
       { title: title, description: description, img: img, link: link, data: data }
    ]
   });
}

public addVideo(title: string, description: string, img: string, data: string, viewCount: string,
                likeCount: string, dislikeCount: string, commentCount: string): void {
  this.setState({
    ...this.state,
    videos: [...this.state.videos,
       { title: title, description: description, img: img, data: data,
         viewCount: viewCount, likeCount: likeCount, dislikeCount: dislikeCount, commentCount: commentCount }
    ]
   });
}
}
