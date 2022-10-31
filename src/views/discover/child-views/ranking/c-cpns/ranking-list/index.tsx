import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

import { RankingListWrapper } from './style'
import ThemeHeaderSong from '@/components/theme-header-song'
import { getImageSize, formatTime } from '@/utils/format'
import { useAppSelector, shallowEqualApp } from '@/store'

interface IProps {
  children?: ReactNode
}

const RankingList: FC<IProps> = () => {
  const state = useAppSelector(
    (state) => ({
      playList: state.ranking.playlist
    }),
    shallowEqualApp
  )
  const tracks = state.playList.tracks || []

  return (
    <RankingListWrapper>
      <ThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map(
              (
                item: {
                  id: React.Key | null | undefined
                  al: { picUrl: string }
                  name:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined
                  dt: number
                  ar: {
                    name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined
                  }[]
                },
                index: number
              ) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {index < 3 ? (
                          <img src={getImageSize(item.al.picUrl, 50)} alt="" />
                        ) : null}
                        <span className="play sprite_table"></span>
                        <span className="name">{item.name}</span>
                      </div>
                    </td>
                    <td>{formatTime(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              }
            )}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
