import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
  title: any
  rightSlot?: any
}

const ThemeHeaderNormal: FC<IProps> = (props) => {
  const { title, rightSlot } = props

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">{rightSlot}</div>
    </HeaderWrapper>
  )
}

export default memo(ThemeHeaderNormal)
