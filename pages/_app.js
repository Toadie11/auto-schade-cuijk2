import "@/styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";

import { Roboto } from "next/font/google";
import { Montserrat } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <div>
        <Head>
          <title>Auto Schade Cuijk</title>
          <link rel="icon" href="/Images/Logo/LogoAutoSchade1.png" />
        </Head>
        <Header />

        <Component {...pageProps} />
        <Footer />
      </div>
    </main>
  );
}
