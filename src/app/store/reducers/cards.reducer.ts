import { State } from '../models/cards.models'
import { CardActionTypes, CardUnion } from '../actions/cards.actions'

const initialState: State = {
  cards: [],
  videos: []
};

export function cardsReducer(state: State = initialState, action: CardUnion) {
  switch (action.type) {

    case CardActionTypes.AddCastomCard:
      return {
        ...state,
         cards: [...state.cards, action]
      }

    case CardActionTypes.AddYoutubeCard:
      return {
        ...this.state,
        videos: this.state.videos.concat({ id: action.payload.id, title: action.payload.title, description: action.payload.description, img: action.payload.img, link: action.payload.link,
         date: action.payload.date, viewCount: action.payload.viewCount, likeCount: action.payload.likeCount, dislikeCount: action.payload.dislikeCount,
          commentCount: action.payload.commentCount })
      }

      case CardActionTypes.CastomCardsSuccess:
        return {
          ...state,
          cards: action.payload.cards
        }

      case CardActionTypes.CastomCardsError:
        return {
          ...state,
          cards: []
        }
        case CardActionTypes.YoutubeCardsSuccess:
          return {
            ...state,
            videos: [...state.videos, ...action.payload.videos]
          }

        case CardActionTypes.YoutubeCardsError:
          return {
            ...state,
            videos: []
          }





    case CardActionTypes.YoutubeCardsError:
      return {
        ...state,
        videos: []
      }

    case CardActionTypes.ChooseCastomCard:
        return state.cards.filter(card =>card.id === action.payload.id )

    case CardActionTypes.YoutubeCardChooseSuccess:
        return state.videos.filter(card =>card.id === action.payload.id )


    default:
      return state
  }
}
