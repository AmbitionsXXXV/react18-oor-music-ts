import React, { memo, Suspense } from 'react'
import type { ReactNode, FC } from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './c-cpns/nav-bar'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div className="top">
        <NavBar />
        <Suspense fallback="">
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default memo(Discover)
