import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Bitrock } from "@thirdweb-dev/chains";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Bitrock}>
      <Component {...pageProps} />
    </ThirdwebProvider>

  )
}

export default MyApp
