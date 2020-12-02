import { StateContext } from "./Store"

export enum ActionType {
  FAVORITE = "favorite",
  UNFAVORITE = "unfavorite",
}
export type Action =
  | { type: ActionType.FAVORITE, id: number }
  | { type: ActionType.UNFAVORITE, id: number }


export const mainReducer = (state: StateContext, action: Action) => {
  switch (action.type) {
    
    case ActionType.FAVORITE:
      // only add if not exists
      const exists = state.favorites.findIndex(id => id === action.id)
      if(exists !== -1){
        return state
      }
      return { ...state, favorites: [...state.favorites, action.id] }
    case ActionType.UNFAVORITE:
        // return all expect matching id
        return { ...state, favorites: state.favorites.filter(id =>id !== action.id)}
    default:
      throw new Error("Unexpected action")
  }
}

// actions
export const favorite = (id: number): Action => {
  return { type: ActionType.FAVORITE, id }
}

export const unfavorite = (id: number): Action => {
  return { type: ActionType.UNFAVORITE, id }
}

export default mainReducer
