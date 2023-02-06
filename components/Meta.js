import Head from "next/head";
import { useRouter } from "next/router";
import { META, DOMAIN } from "../lib/constants";

export default function Meta() {
  const router = useRouter();
  return (
    <Head>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#000000" />
      <link rel="shortcut icon" href="/favicons/favicon.ico" />
      <meta name="robots" content="follow, index" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicons/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <meta name="description" content={META.description} />
      <meta property="og:image" content={META.image} />
      <meta property="og:url" content={`${DOMAIN}${router.asPath}`} />
      <link rel="canonical" href={`${DOMAIN}${router.asPath}`} />
      <meta property="og:type" content={META.type} />
      <meta property="og:site_name" content={META.title} />
      <meta property="og:description" content={META.description} />
      <meta property="og:image" content={META.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={META.twitter.username} />
      <meta name="twitter:title" content={META.title} />
      <meta name="twitter:description" content={META.description} />
      <meta name="twitter:image" content={META.image} />
    </Head>
  );
}
