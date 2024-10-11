import '@/styles/globals.css'
import HookDimensionsProvider from '@/utils/hook'
import type { AppProps } from 'next/app'
import { useLayoutEffect, useState } from 'react'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(false)

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 50)
  }, [])
  return (
    <HookDimensionsProvider>
      {
        loading && (
          <>
            <Component {...pageProps} />
            <Analytics />
          </>
        )
      }
    </HookDimensionsProvider>
  )
}
