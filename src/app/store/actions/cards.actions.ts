import { Action } from '@ngrx/store'
import { State, ICustomCard, IYoutubeVideo } from '../models/cards.models'

export enum CardActionTypes {
  AddCastomCard = '[Card] Add Castom Card',
  AddYoutubeCard = '[Card] Add Youtube Card',
  LoadCastomCards = '[Cards] Load Castom Cards',
  CastomCardsSuccess = '[Cards] Castom Cards Success',
  CastomLoadedError = '[Cards] Castom Cards Error',
  LoadYoutubeCards = '[Cards] Load Youtube Cards',
  YoutubeCardsSuccess = '[Cards] Youtube Cards Success',
  YoutubeLoadedError = '[Cards] Youtube Cards Error',
  ChooseCastomCard = '[Card] Choose Castom Card',
  ChooseYoutubeCard = '[Card] Choose Youtube Card',
  YoutubeCardChooseSuccess = '[Card] Youtube Card ChooseSuccess',
  YoutubeCardChooseError = '[Card] Youtube Card ChooseError',
  CastomCardsError = '[Cards] Castom Cards Error',
  YoutubeCardsError = '[Cards] Youtube Cards Error',
}


export class AddCastomCard implements Action {
  readonly type = CardActionTypes.AddCastomCard

  constructor(public payload: { cards: ICustomCard }) {}
}

  export class AddYoutubeCard implements Action {
    readonly type = CardActionTypes.AddYoutubeCard

    constructor( public payload:{id, title,description,img,link,
       date,viewCount, likeCount, dislikeCount, commentCount}) {}
  }


export class LoadCastomCards implements Action {
  readonly type = CardActionTypes.LoadCastomCards
}

export class CastomCardsSuccess implements Action {
  readonly type = CardActionTypes.CastomCardsSuccess

  constructor(public payload: { cards: ICustomCard[] }) {}
}

export class CastomCardsError implements Action {
  readonly type = CardActionTypes.CastomCardsError
}

export class LoadYoutubeCards implements Action {
  readonly type = CardActionTypes.LoadYoutubeCards
}

export class YoutubeCardsSuccess implements Action {
  readonly type = CardActionTypes.YoutubeCardsSuccess

  constructor(public payload: { videos: IYoutubeVideo[] }) {}
}

export class YoutubeCardsError implements Action {
  readonly type = CardActionTypes.YoutubeCardsError
}

export class ChooseCastomCard implements Action {
  readonly type = CardActionTypes.ChooseCastomCard

  constructor(public payload: { id: string }) {}
}

export class ChooseYoutubeCard implements Action {
  readonly type = CardActionTypes.ChooseYoutubeCard

  constructor(public payload: { id: string }) {}
}

export class YoutubeCardChooseSuccess implements Action {
  readonly type = CardActionTypes.YoutubeCardChooseSuccess

  constructor(public payload: { id: string }) {}
}

export class YoutubeCardChooseError implements Action {
  readonly type = CardActionTypes.YoutubeCardChooseError
}

export type CardUnion =
  | AddCastomCard
  | AddYoutubeCard
  | LoadCastomCards
  | CastomCardsSuccess
  | CastomCardsError
  | LoadYoutubeCards
  | YoutubeCardsSuccess
  | YoutubeCardsError
  | ChooseCastomCard
  | ChooseYoutubeCard
  | YoutubeCardChooseSuccess
  | YoutubeCardChooseError;
