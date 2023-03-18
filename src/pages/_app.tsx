import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/sidebar'
import { UserContextProvider } from '@/context/UserContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='flex'>
      <UserContextProvider>
        <Sidebar />
        <Component {...pageProps} />
      </UserContextProvider>
    </div>
  )
}
