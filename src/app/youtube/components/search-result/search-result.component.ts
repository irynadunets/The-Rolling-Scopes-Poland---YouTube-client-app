import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { IVideoItem } from '../../../shared/models/search-item.model';
import { selectCustomCards, selectYoutubeCards } from '../../../store/index';
import { Observable, Subscription, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State, ICustomCard, IYoutubeVideo } from '../../../store/models/cards.models';
import { map, mergeMap, catchError } from 'rxjs/operators';

import {
 CardActionTypes,
 AddCastomCard,
 AddYoutubeCard,
 LoadCastomCards,
 CastomCardsSuccess,
 CastomCardsError,
 LoadYoutubeCards,
 YoutubeCardsSuccess,
 YoutubeCardsError,
 ChooseCastomCard,
 ChooseYoutubeCard,
} from '../../../store/actions/cards.actions';


@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  providers: [ YoutubeService ]
})

export class SearchResultComponent {
  @Input() public searchText: string;
  @Input() public filtrValue: string;
  @Input() public param1: string;
  @Input() public param2: string;
  public items: IVideoItem[];

  items$: Observable<IYoutubeVideo[]|ICustomCard[]> = this.store.pipe(select(selectYoutubeCards));

  constructor(private store: Store<State>, private youtubeService: YoutubeService) {
    let arr;
    this.youtubeService.getData('12', this.searchText)
          .subscribe(
              data => {
         arr = data.items;
         arr.forEach((item) => {
           console.log(item);
           console.log(this.store);

           this.store.dispatch({ type: '[Card] Add Youtube Card', id: item.id, title: item.snippet.title, description: item.snippet.description, img: item.snippet.thumbnails.default.url,link: item.snippet.thumbnails.default.url,
           date: item.snippet.publishedAt, viewCount: item.statistics.viewCount, likeCount: item.statistics.likeCount, dislikeCount: item.statistics.dislikeCount, commentCount: item.statistics.commentCount });
         })
       },
        err => console.log(err)
      );

console.log(this.items$);
this.store.subscribe(data => {
      console.log(data);
})
 }

 

}
