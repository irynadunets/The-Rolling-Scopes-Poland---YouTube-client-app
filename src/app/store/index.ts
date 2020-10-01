import { State } from './models/cards.models'
import {createSelector} from 'reselect'

export const selectCustomCards = (state: State) => state.cards
export const selectYoutubeCards = (state: State) => state.videos
