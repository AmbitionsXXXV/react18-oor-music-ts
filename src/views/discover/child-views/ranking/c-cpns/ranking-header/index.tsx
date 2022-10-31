import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RankingHeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const RankingHeader: FC<IProps> = () => {
  return (
    <RankingHeaderWrapper>
      <div>RankingHeader</div>
    </RankingHeaderWrapper>
  )
}

export default memo(RankingHeader)
