import React, {createContext, useContext, useReducer} from 'react'
import mainReducer, { Action } from './Reducer'


export interface StateContext {
    favorites: number[]
}

export interface Store {
    state: StateContext;
    dispatch: React.Dispatch<Action>;
}

// default
const defaultState: StateContext = { favorites: [] };
const defaultDispatch : React.Dispatch<Action> = () => null

// context
const myContext = createContext<Store>({ state: defaultState, dispatch: defaultDispatch });
export const useStateContext = () => useContext(myContext);

// contewt provider to share reducer with componennt children
export const StateProvider: React.FC  = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, defaultState);

  const value = { state, dispatch }
  return <myContext.Provider value={value} >{children}</myContext.Provider>
}