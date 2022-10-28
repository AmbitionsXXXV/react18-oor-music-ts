import React, { memo } from 'react'
import type { ReactNode, FC } from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const AppHeader: FC<IProps> = () => {
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <div>AppHeader</div>
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">我的关注</Link>
        <Link to="/download">下载音乐</Link>
      </div>
    </HeaderWrapper>
  )
}

export default memo(AppHeader)
