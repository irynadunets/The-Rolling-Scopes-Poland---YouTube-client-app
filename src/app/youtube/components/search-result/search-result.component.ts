import { Component, OnInit, Input } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import { CardStoreService } from '../../../store/store.service';
import { IVideoItem} from '../../../shared/models/search-item.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  providers: [ YoutubeService ]
})

export class SearchResultComponent implements OnInit {
  @Input() public searchText: string;
  @Input() public filtrValue: string;
  @Input() public param1: string;
  @Input() public param2: string;
  public items: IVideoItem[] = [];

  constructor(private youtubeService: YoutubeService, public cardStoreService: CardStoreService) { }

  public ngOnInit(): void {
    this.initCards();
  }

  public initCards(): void  {
    this.youtubeService.getData('12', this.searchText)
      .subscribe(
         data => {
         this.items = data.items;
         this.items.forEach(el => this.cardStoreService.addVideo(
           el.snippet.title,
           el.snippet.description, el.snippet.thumbnails.default.url,
           el.snippet.publishedAt, el.statistics.viewCount, el.statistics.likeCount,
           el.statistics.dislikeCount, el.statistics.commentCount));
         },
         err => console.log(err)
         );
    console.log(this.cardStoreService.state$);
  }
}
