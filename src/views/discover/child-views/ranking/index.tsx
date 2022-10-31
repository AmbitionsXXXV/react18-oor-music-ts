import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingWrapper, RankingLeft, RankingRight } from './style'
import TopRanking from './c-cpns/top-ranking'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'
import { useAppDispatch } from '@/store'
import { fetchTopListDataAction } from './store/ranking'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(fetchRankingDataAction())
    dispatch(fetchTopListDataAction())
  }, [])

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <TopRanking />
      </RankingLeft>
      <RankingRight>
        <RankingHeader />
        <RankingList />
      </RankingRight>
    </RankingWrapper>
  )
}

export default memo(Ranking)
