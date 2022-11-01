import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { RecommendWrapper } from './style'
import { shallowEqualApp, useAppSelector } from '@/store'
import { useDispatch } from 'react-redux'
import { getRadioRecommend } from '../../store/djradio'
import ThemeHeaderNormal from '@/components/theme-header-normal'
import RadioRecommendCover from '@/components/radio-recommend-cover'

interface IProps {
  children?: ReactNode
}

const RadioRecommend: FC<IProps> = () => {
  const { currentId, recommends } = useAppSelector(
    (state) => ({
      currentId: state.djradio.currentId,
      recommends: state.djradio.recommends
    }),
    shallowEqualApp
  )

  const dispatch = useDispatch()

  // hooks
  useEffect(() => {
    if (currentId === 0) return
    dispatch(getRadioRecommend(currentId))
  }, [dispatch, currentId])

  return (
    <RecommendWrapper>
      <ThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {recommends
          .slice(0, 5)
          .map((item: { id: React.Key | null | undefined }) => {
            return <RadioRecommendCover info={item} key={item.id} />
          })}
      </div>
    </RecommendWrapper>
  )
}

export default memo(RadioRecommend)
