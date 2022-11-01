import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { CoverWrapper } from './style'
import { getImageSize } from '@/utils/format'

interface IProps {
  children?: ReactNode
  info: any
}

const RadioRecommendCover: FC<IProps> = (props) => {
  const { info } = props

  return (
    <CoverWrapper>
      <a href="/#">
        <img src={getImageSize(info.picUrl, 150)} alt="" />
      </a>
      <a href="/#" className="text-nowrap name">
        {info.name}
      </a>
      <p className="text-nowrap">{info.desc}</p>
    </CoverWrapper>
  )
}

export default memo(RadioRecommendCover)
