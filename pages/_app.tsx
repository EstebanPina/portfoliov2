import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Bebas_Neue, Poppins } from 'next/font/google'
const bebas_neue = Bebas_Neue({ 
  subsets: ['latin'], 
  weight: ['400'], 
  variable: '--font-bebas-neue' 
})

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400'], 
  variable: '--font-poppins' 
})
export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <main className={`${bebas_neue.variable} ${poppins.variable}`}>
    <Component {...pageProps} />
    </main>
  )
}
