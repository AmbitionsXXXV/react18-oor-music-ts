import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Artist: FC<IProps> = (props) => {
  return (
    <div>
      <div>Artist</div>
    </div>
  )
}

export default memo(Artist)
