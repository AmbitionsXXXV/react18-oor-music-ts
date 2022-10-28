import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Recommend: FC<IProps> = () => {
  return (
    <div>
      <div>Recommend</div>
    </div>
  )
}

export default memo(Recommend)
