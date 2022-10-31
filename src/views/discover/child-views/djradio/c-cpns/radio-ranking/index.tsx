import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const RadioRanking: FC<IProps> = () => {
  return (
    <RankingWrapper>
      <div>RadioRanking</div>
    </RankingWrapper>
  )
}

export default memo(RadioRanking)
