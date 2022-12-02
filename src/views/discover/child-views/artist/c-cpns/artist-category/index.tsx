import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ArtistCategoryWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const ArtistCategory: FC<IProps> = () => {
  return (
    <ArtistCategoryWrapper>
      <div>ArtistCategory</div>
    </ArtistCategoryWrapper>
  )
}

export default memo(ArtistCategory)
