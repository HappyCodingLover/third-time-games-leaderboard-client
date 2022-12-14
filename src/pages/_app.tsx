import { Flowbite, Spinner } from 'flowbite-react'
import { AppProps } from 'next/app'
import { FC, Suspense } from 'react'
import LeaderboardLayout from '../context/LeaderboardContext'
import '../styles/globals.css'
import { flowbiteTheme as theme } from '../theme'

const App: FC<AppProps> = function ({ Component, pageProps }): JSX.Element {
  return (
    <Suspense
      fallback={
        <div className='flex items-center justify-center'>
          <Spinner size='lg' /> Loading..
        </div>
      }>
      <Flowbite theme={{ theme }}>
        <LeaderboardLayout>
          <Component {...pageProps} />
        </LeaderboardLayout>
      </Flowbite>
    </Suspense>
  )
}

export default App
