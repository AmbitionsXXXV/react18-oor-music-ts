import React, { memo, useEffect } from 'react'
import type { ReactNode, FC } from 'react'
import { useAppDispatch } from '../../../../store/index'
import { fetchBannerDataAction } from './store/recommend'
import TopBanner from './c-cpns/top-banner'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  /** 发起action(获取数据) */
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBannerDataAction())
  })

  /** render函数的返回jsx */
  return (
    <div>
      <TopBanner />
      Recommend
    </div>
  )
}

export default memo(Recommend)
