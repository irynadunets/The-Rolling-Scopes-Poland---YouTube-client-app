import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { EMPTY } from 'rxjs';
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
} from '../actions/cards.actions'

import { State, IYoutubeVideo } from '../models/cards.models'

import { YoutubeService } from '../../youtube/services/youtube.service'

@Injectable({ providedIn: 'root' })
export class CardEffects {
  @Effect()
   LoadYoutubeCards$ = this.actions$.pipe(
     ofType(CardActionTypes.LoadYoutubeCards),
     mergeMap(() =>
       this.youtubeService.getData().pipe(
         map( items => ({ type: '[Cards] Youtube Cards Success', payload: items })),
         catchError(() => EMPTY)
       )
     )
   )

  @Effect()
  chooseYoutubeCard$ = this.actions$.pipe(
    ofType(CardActionTypes.ChooseYoutubeCard),
    mergeMap((action: ChooseYoutubeCard) =>
      this.youtubeService.getItemById(action.payload.id).pipe(
        map(id => ({ type: '[Card] Choose Castom Card', payload: id })),
        catchError(() => EMPTY)
    )
  )
)

  constructor(private actions$: Actions, private youtubeService: YoutubeService) {}
}
