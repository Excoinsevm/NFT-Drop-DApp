import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Bitrock } from "@thirdweb-dev/chains";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider 
      activeChain={ChainId.Bitrock}>
      clientId="830895eacab7ee300e6fe20e41542694"
      <Component {...pageProps} />
    </ThirdwebProvider>

  )
}

export default MyApp
