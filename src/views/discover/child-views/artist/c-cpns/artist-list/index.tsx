import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ArtistListWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const ArtistList: FC<IProps> = () => {
  return (
    <ArtistListWrapper>
      <div>ArtistList</div>
    </ArtistListWrapper>
  )
}

export default memo(ArtistList)
