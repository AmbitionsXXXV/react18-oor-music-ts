import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { TopRankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const TopRanking: FC<IProps> = () => {
  return (
    <TopRankingWrapper>
      <div>TopRanking</div>
    </TopRankingWrapper>
  )
}

export default memo(TopRanking)
