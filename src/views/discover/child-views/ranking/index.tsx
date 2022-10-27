import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'

interface IProps {
  children?: ReactNode
}

const Ranking: FC<IProps> = (props) => {
  return (
    <div>
      <div>Ranking</div>
    </div>
  )
}

export default memo(Ranking)
