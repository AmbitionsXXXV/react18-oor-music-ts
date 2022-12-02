import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { AlphaListWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AlphaList: FC<IProps> = () => {
  return (
    <AlphaListWrapper>
      <div>AlphaList</div>
    </AlphaListWrapper>
  )
}

export default memo(AlphaList)
