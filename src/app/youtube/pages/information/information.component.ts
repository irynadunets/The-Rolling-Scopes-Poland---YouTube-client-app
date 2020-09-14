import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemsService } from '../../../shared/services/items-service';
import { IVideoItem} from '../../../shared/models/search-item.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss'],
  providers: [ItemsService]
})
export class InformationComponent implements OnInit {

  public id: string;
  public items: IVideoItem[] = [];
  public color: string;
  public date: Date|string;
  public card: IVideoItem;

  constructor(private route: ActivatedRoute, private location: Location, private itemsService: ItemsService) {
    this.route.params.subscribe( params => {
      this.id = params.id;
    });
   }

  public ngOnInit(): void {
    this.items = this.itemsService.items;
    this.card = this.items.find(el => el.id === this.id);
    this.color = this.card.snippet.publishedAt;
    this.date = new Date(this.color);
    this.date = this.date.toDateString().substring(-25);
  }

  public return(): void {
    this.location.back();
  }

}
