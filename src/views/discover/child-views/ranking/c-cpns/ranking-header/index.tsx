import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'
import { RankingHeaderWrapper } from './style'
import SongOperationBar from '@/components/song-operation-bar'

interface IProps {
  children?: ReactNode
}

const RankingHeader: FC<IProps> = () => {
  const state = useAppSelector(
    (state) => ({
      playList: state.ranking.playlist
    }),
    shallowEqualApp
  )
  const topInfo = state.playList
  console.log(topInfo)

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={topInfo.coverImgUrl} alt="" />
        <span className="image_cover"></span>
      </div>
      <div className="info">
        <div className="title">{topInfo.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{topInfo.updateTime}</div>
          <div className="update-f">（{'每日更新:TODO'}）</div>
        </div>
        <SongOperationBar
          favorTitle={`(${topInfo.subscribedCount})`}
          shareTitle={`(${topInfo.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${topInfo.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  )
}

export default memo(RankingHeader)
