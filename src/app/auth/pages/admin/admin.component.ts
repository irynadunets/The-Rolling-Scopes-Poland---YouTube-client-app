import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../../store/models/cards.models';
import { AddCastomCard } from '../../../store/actions/cards.actions';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public isShow: boolean = false;
  public id: string;
  public title: string;
  public description: string;
  public img: string;
  public link: string;
  public data: string;

  constructor(private store: Store<State>) { }

  public ngOnInit(): void {  }

  public onCreate(title, description, img, link, data) {
    if (this.title && this.description && this.img && this.link) {
       this.isShow = false;
      let card = {
        id: this.id,
        title: this.title,
        description: this.description,
        img: this.img,
        link: this.link,
        date: this.data,
      };
        this.store.dispatch(new AddCastomCard({ cards: card }));
        this.id = '';
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
