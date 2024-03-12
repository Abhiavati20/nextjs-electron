// builtin module
import type { AppProps } from "next/app";

// external module
import TanstackProvider from "@/providers/TanstackProvider";

// css module
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <TanstackProvider>
            <Component {...pageProps} />
        </TanstackProvider>
    );
}
