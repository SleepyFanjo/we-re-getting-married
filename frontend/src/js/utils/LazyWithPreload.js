import { lazy } from 'react'

const LazyWithPreload = importFunc => {
  const lazyComponent = lazy(importFunc)
  lazyComponent.preload = importFunc
  return lazyComponent
}

export default LazyWithPreload
