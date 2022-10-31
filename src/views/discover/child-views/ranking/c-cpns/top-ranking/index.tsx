import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'

import { TopRankingWrapper } from './style'
import classNames from 'classnames'
import { shallowEqualApp, useAppDispatch, useAppSelector } from '@/store'

import { getImageSize } from '@/utils/format'
import { changeCurrentIndex, getRanking } from '../../store/ranking'
interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  // redux
  const state = useAppSelector(
    (state) => ({
      topList: state.ranking.topList,
      currentIndex: state.ranking.currentIndex
    }),
    shallowEqualApp
  )
  const currentIndex = state.currentIndex
  const dispatch = useAppDispatch()

  // // hooks
  useEffect(() => {
    const id = state.topList[currentIndex] && state.topList[currentIndex].id
    if (!id) return
    dispatch(getRanking(id))
  }, [state, dispatch, currentIndex])

  // handle function
  const handlerItemClick = (index: number) => {
    dispatch(changeCurrentIndex(index))
    const id = state.topList[currentIndex].id
    dispatch(getRanking(id))
  }

  return (
    <TopRankingWrapper>
      {state.topList.map(
        (
          item: {
            id: React.Key | null | undefined
            coverImgUrl: string
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
            updateFrequency:
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
          },
          index: number
        ) => {
          let header
          if (index === 0 || index === 4) {
            header = (
              <div className="header">
                {index === 0 ? '云音乐特色榜' : '全球媒体榜'}
              </div>
            )
          }
          return (
            <div key={item.id}>
              {header}
              <div
                className={classNames('item', {
                  active: index === currentIndex
                })}
                onClick={() => handlerItemClick(index)}
              >
                <img src={getImageSize(item.coverImgUrl, 40, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        }
      )}
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
