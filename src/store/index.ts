import { configureStore } from '@reduxjs/toolkit'
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook,
  shallowEqual
} from 'react-redux'

import recommendReducer from '../views/discover/child-views/recommend/store/recommend'
import playerReducer from '../views/player/store/player'
import rankingReducer from '../views/discover/child-views/ranking/store/ranking'

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    player: playerReducer,
    ranking: rankingReducer
  }
})

// const state = store.getState()
// type StateType = typeof state

type GetStateFnType = typeof store.getState
export type IRootState = ReturnType<GetStateFnType>
type DispatchType = typeof store.dispatch

// useAppSelector的hook
export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector
export const useAppDispatch: () => DispatchType = useDispatch
export const shallowEqualApp = shallowEqual

export default store
