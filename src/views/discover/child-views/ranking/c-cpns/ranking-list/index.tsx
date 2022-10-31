import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingListWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const RankingList: FC<IProps> = () => {
  return (
    <RankingListWrapper>
      <div>RankingList</div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
