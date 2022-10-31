import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { getRankingList, getTopList } from '../service/ranking'
// getRankingList 'playlist'
// getTopList 'toplist'

export const fetchTopListDataAction = createAsyncThunk(
  'toplist',
  async (arg, { dispatch }) => {
    const res = await getTopList()
    dispatch(changeTopListAction(res.list))
  }
)

export const changeCurrentIndex = (index: any) => ({
  type: 'rangking/CHANGE_CURRENT_INDEX',
  currentIndex: index
})

export const getRanking = (id: number) => {
  return (dispatch: (arg0: any) => void) => {
    getRankingList(id).then((res) => {
      dispatch(changePlayListAction(res))
    })
  }
}

interface IRankingState {
  topList: any[]
  playlist: any
  currentIndex: number
}

const initialState: IRankingState = {
  topList: [],
  playlist: {},
  currentIndex: 0
}

const rankingSlice = createSlice({
  name: 'ranking',
  initialState,
  reducers: {
    changeTopListAction(state, { payload }) {
      state.topList = payload
    },
    changeCurrentIndexAction(state, { payload }) {
      state.currentIndex = payload
    },
    changePlayListAction(state, { payload }) {
      state.playlist = payload.playlist
    }
  }
})

export const {
  changeTopListAction,
  changeCurrentIndexAction,
  changePlayListAction
} = rankingSlice.actions
export default rankingSlice.reducer
