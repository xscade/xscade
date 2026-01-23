'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

function ErrorFallback({ error }: { error: unknown }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary/5 rounded-2xl">
      <div className="text-center p-8">
        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">3D scene unavailable</p>
      </div>
    </div>
  )
}

function SplineLoader() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-primary/5 rounded-2xl">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
        <p className="text-sm text-muted-foreground">Loading 3D scene...</p>
      </div>
    </div>
  )
}

function SplineWrapper({ scene, className }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Reset error state when scene changes
    setHasError(false)
  }, [scene])

  if (hasError) {
    return <ErrorFallback error={new Error('Failed to load Spline scene')} />
  }

  try {
    return (
      <Spline
        scene={scene}
        className={className}
      />
    )
  } catch (error) {
    setHasError(true)
    return <ErrorFallback error={error as Error} />
  }
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<SplineLoader />}>
        <SplineWrapper scene={scene} className={className} />
      </Suspense>
    </ErrorBoundary>
  )
}
