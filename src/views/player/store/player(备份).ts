import { ILyric, parseLyric } from '@/utils/parse-lyric'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getSongDetail, getSongLyric } from '../service/player'

export const fetchCurrentSongAction = createAsyncThunk(
  'currentSong',
  (id: number, { dispatch }) => {
    // 1.获取歌曲信息
    getSongDetail(id).then((res) => {
      // 1.获取song
      if (!res.songs.length) return
      const song = res.songs[0]

      // 2.将song放到currentSong中
      dispatch(changeCurrentSongAction(song))
    })

    // 2.获取歌词数据
    getSongLyric(id).then((res) => {
      // 1.获取歌词的字符串
      const lyricString = res.lrc.lyric
      // 2.对歌词进行解析(一个个对象)
      const lyrics = parseLyric(lyricString)
      // 3.将歌词放到state中
      dispatch(changeLyricsAction(lyrics))
    })
  }
)

interface IPlayerState {
  currentSong: any
  lyrics: ILyric[]
  lyricIndex: number
  playSongList: any[]
  playSongIndex: number
}
const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [
    {
      name: '温柔',
      id: 386538,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 13193,
          name: '五月天',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '600902000000534560',
      fee: 8,
      v: 76,
      crbt: null,
      cf: '',
      al: {
        id: 38285,
        name: '我们是五月天',
        picUrl:
          'https://p2.music.126.net/v4V40sXKnaqsG0ACyY0aDg==/109951164912221924.jpg',
        tns: [],
        pic_str: '109951164912221924',
        pic: 109951164912221920
      },
      dt: 269800,
      h: {
        br: 320000,
        fid: 0,
        size: 10794885,
        vd: -63963,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6476948,
        vd: -61380,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4317980,
        vd: -59700,
        sr: 44100
      },
      sq: {
        br: 1053723,
        fid: 0,
        size: 35536822,
        vd: -63997,
        sr: 44100
      },
      hr: null,
      a: null,
      cd: '1',
      no: 2,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 8704,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 76,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      rtype: 0,
      mst: 9,
      cp: 684010,
      mv: 10929721,
      publishTime: 1049126400000
    },
    {
      name: '这世界那么多人',
      id: 1842025914,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 8926,
          name: '莫文蔚',
          tns: [],
          alias: []
        }
      ],
      alia: ['电影《我要我们在一起》主题曲'],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 18,
      crbt: null,
      cf: '',
      al: {
        id: 126837556,
        name: '这世界那么多人',
        picUrl:
          'https://p1.music.126.net/LOTxqRjFm03VJEOHJbUqMw==/109951165944804127.jpg',
        tns: [],
        pic_str: '109951165944804127',
        pic: 109951165944804130
      },
      dt: 285884,
      h: {
        br: 320000,
        fid: 0,
        size: 11436452,
        vd: -24264,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 6861889,
        vd: -21628,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 4574607,
        vd: -19844,
        sr: 44100
      },
      sq: null,
      hr: null,
      a: null,
      cd: '01',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 8192,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 18,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      mv: 14316913,
      publishTime: 1620316800000
    },
    {
      name: '起风了',
      id: 1330348068,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 12085562,
          name: '买辣椒也用券',
          tns: [],
          alias: []
        }
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: '',
      fee: 8,
      v: 42,
      crbt: null,
      cf: '',
      al: {
        id: 74715426,
        name: '起风了',
        picUrl:
          'https://p1.music.126.net/diGAyEmpymX8G7JcnElncQ==/109951163699673355.jpg',
        tns: [],
        pic_str: '109951163699673355',
        pic: 109951163699673360
      },
      dt: 325868,
      h: {
        br: 320000,
        fid: 0,
        size: 13037236,
        vd: -77525,
        sr: 44100
      },
      m: {
        br: 192000,
        fid: 0,
        size: 7822359,
        vd: -74987,
        sr: 44100
      },
      l: {
        br: 128000,
        fid: 0,
        size: 5214920,
        vd: -73504,
        sr: 44100
      },
      sq: {
        br: 985873,
        fid: 0,
        size: 40158105,
        vd: -77524,
        sr: 44100
      },
      hr: {
        br: 2832349,
        fid: 0,
        size: 115371553,
        vd: -77475,
        sr: 88200
      },
      a: null,
      cd: '1',
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 0,
      s_id: 0,
      mark: 536879104,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 42,
      songJumpInfo: null,
      entertainmentTags: null,
      awardTags: null,
      single: 0,
      noCopyrightRcmd: null,
      mv: 10782615,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 1415923,
      publishTime: 0
    }
  ],
  playSongIndex: -1
}

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload
    },
    changeLyricsAction(state, { payload }) {
      state.lyrics = payload
    },
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload
    }
  }
})

export const {
  changeCurrentSongAction,
  changeLyricsAction,
  changeLyricIndexAction
} = playerSlice.actions
export default playerSlice.reducer
