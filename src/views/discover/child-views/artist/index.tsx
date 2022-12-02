import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { ArtistWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = () => {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <div>Artist</div>
      </div>
    </ArtistWrapper>
  )
}

export default memo(Artist)
