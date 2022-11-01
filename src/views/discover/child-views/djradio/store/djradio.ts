import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios
} from '../service/djradio'

export const fetchDjradioDataAction = createAsyncThunk(
  'djradio',
  async (arg, { dispatch }) => {
    const res = await getDjRadioCatelist()
    dispatch(changeCategoryAction(res))
  }
)

export const getRadioCategories = () => {
  return (dispatch: (arg0: { payload: any; type: string }) => void) => {
    getDjRadioCatelist().then((res) => {
      dispatch(changeCategoryAction(res))
      const currentId = res.categories[0].id
      dispatch(changeCurrentIdAction(currentId))
    })
  }
}

export const getRadioRecommend = (currentId: any) => {
  return (dispatch: (arg0: { payload: any; type: any }) => void) => {
    getDjRadioRecommend(currentId).then((res) => {
      dispatch(changeRecommendsAction(res))
    })
  }
}

export const getRadios = (currentId: any, offset: any) => {
  return (dispatch: (arg0: { payload: any; type: string }) => void) => {
    getDjRadios(currentId, 30, offset).then((res) => {
      dispatch(changeRadiosAction(res))
    })
  }
}

interface IDjradioState {
  categories: any
  recommends: any
  radios: any
  currentId: number
}

const initialState: IDjradioState = {
  categories: [],
  recommends: [],
  radios: [],
  currentId: 0
}

const djradioSlice = createSlice({
  name: 'djradio',
  initialState,
  reducers: {
    changeCategoryAction(state, { payload }) {
      state.categories = payload.categories
    },
    changeRecommendsAction(state, { payload }) {
      state.recommends = payload
    },
    changeCurrentIdAction(state, { payload }) {
      state.currentId = payload
    },
    changeRadiosAction(state, { payload }) {
      state.radios = payload
    }
  }
})

export const {
  changeCategoryAction,
  changeRecommendsAction,
  changeCurrentIdAction,
  changeRadiosAction
} = djradioSlice.actions
export default djradioSlice.reducer
