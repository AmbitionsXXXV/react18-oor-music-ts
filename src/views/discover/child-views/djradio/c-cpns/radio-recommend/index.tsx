import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const RadioRecommend: FC<IProps> = (props) => {
  return (
    <RecommendWrapper>
      <div>RadioRecommend</div>
    </RecommendWrapper>
  )
}

export default memo(RadioRecommend)
