import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { DjRadioWrapper } from './style'
import RadioCategory from './c-cpns/radio-category'
import RadioRecommend from './c-cpns/radio-recommend'
import RadioRanking from './c-cpns/radio-ranking'
import { fetchDjradioDataAction } from './store/djradio'
import { useAppDispatch } from '@/store'

interface IProps {
  children?: ReactNode
}

const Djradio: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = useAppDispatch()
  useEffect(() => {
    // dispatch(fetchRankingDataAction())
    dispatch(fetchDjradioDataAction())
  }, [])

  return (
    <DjRadioWrapper className="wrap-v2">
      <RadioCategory />
      <RadioRecommend />
      <RadioRanking />
    </DjRadioWrapper>
  )
}

export default memo(Djradio)
