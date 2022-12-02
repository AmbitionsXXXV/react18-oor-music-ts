import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ArtistItemWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const ArtistItem: FC<IProps> = () => {
  return (
    <ArtistItemWrapper>
      <div>ArtistItem</div>
    </ArtistItemWrapper>
  )
}

export default memo(ArtistItem)
