import { Component, OnInit } from '@angular/core';
import { CardStoreService } from '../../../store/store.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isShow: boolean = false;
  public title: string;
  public description: string;
  public img: string;
  public link: string;
  public data: string;

  constructor(public cardStoreService: CardStoreService) { }

  public ngOnInit(): void {  }

  public onCreate(title: string, description: string, img: string, link: string, data: string): void {
    if (this.title && this.description && this.img && this.link) {
    this.isShow = false;
    this.cardStoreService.addCard(title, description, img, link, data);
    this.title = '';
    this.description = '';
    this.img = '';
    this.link = '';
    this.data = '';
  } else {
    this.isShow = true;
  }
  }
}
