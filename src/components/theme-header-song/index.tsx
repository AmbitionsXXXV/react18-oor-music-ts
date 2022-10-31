import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HeaderWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'

interface IProps {
  children?: ReactNode
}

const ThemeHeaderSong: FC<IProps> = () => {
  const state = useAppSelector(
    (state) => ({
      playList: state.ranking.playlist
    }),
    shallowEqualApp
  )

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{state.playList.trackCount}首歌</div>
      </div>
      <div className="right">
        <span>播放：</span>
        <span className="count">{state.playList.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  )
}

export default memo(ThemeHeaderSong)
