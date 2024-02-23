import Head from "next/head";
import React from "react";
import "/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <div className="overflow-hidden">
                <Component {...pageProps} />
            </div>
        </>
    );
};

export default App;
