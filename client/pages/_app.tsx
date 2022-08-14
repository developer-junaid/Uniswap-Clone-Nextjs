import "../styles/globals.css";
import type { AppProps } from "next/app";

// Context
import { TransactionProvider } from "../context/TransactionContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TransactionProvider>
      <Component {...pageProps} />
    </TransactionProvider>
  );
}

export default MyApp;
