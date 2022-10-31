import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingWrapper, RankingLeft, RankingRight } from './style'
import TopRanking from './c-cpns/top-ranking'
import RankingHeader from './c-cpns/ranking-header'
import RankingList from './c-cpns/ranking-list'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = () => {
  return (
    <RankingWrapper>
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
