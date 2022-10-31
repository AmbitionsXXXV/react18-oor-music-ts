import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { DjRadioWrapper } from './style'
import RadioCategory from './c-cpns/radio-category'
import RadioRecommend from './c-cpns/radio-recommend'
import RadioRanking from './c-cpns/radio-ranking'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  return (
    <DjRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRanking />
    </DjRadioWrapper>
  )
}

export default memo(Djradio)
