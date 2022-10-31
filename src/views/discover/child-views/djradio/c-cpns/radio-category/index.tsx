import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { shallowEqualApp, useAppSelector } from '@/store'
import classnames from 'classnames'

import { Carousel } from 'antd'
import { CategoryWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const RadioCategory: FC<IProps> = () => {
  return (
    <CategoryWrapper>
      <div>RadioCategory</div>
    </CategoryWrapper>
  )
}

export default memo(RadioCategory)
