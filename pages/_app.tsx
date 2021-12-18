import { AppProps } from "next/app";
import { NextSeo } from "next-seo";
import Head from "next/head";
import "styles/global.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title={"IllusionMan1212 - Software Developer"}
        description={"I'm a software developer, web developer and open source enthusiast and contributor"}
        openGraph={{
          title: "IllusionMan1212 - Software Developer",
          description: "I'm a software developer, web developer and open source enthusiast and contributor",
          type: "website",
          url: "https://illusionman1212.tech",
          site_name: "IllusionMan1212 - Software Developer",
          locale: "en_US",
          images: [
            {
              url: "https://illusionman1212.tech/android-chrome-192x192.png"
            }
          ]
        }}
        twitter={{
          site: "@illusionman1212",
          handle: "@illusionman1212",
          cardType: "summary"
        }}
      />
      <Head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="keywords" content="blog, illusionman1212, portfolio, software, web, tech"/>
        <meta name="copyright" content="IllusionMan1212"/>
        <meta name="theme-color" content="#252525"/>

        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"/>
        <link
          rel="mask-icon"
          href="/safari-pinned-tab.svg"
          color="#252525"
        />
        <meta name="msapplication-TileColor" content="#151515"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
