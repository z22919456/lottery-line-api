import type { Liff } from "@line/liff";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect } from 'react'

const Home: NextPage<{ liff: Liff | null; liffError: string | null }> = ({
  liff,
  liffError
}) => {

  useEffect(() => {
    if (liff && !liff.isLoggedIn()) liff.login()
    console.log(liff?.getLanguage());
    console.log(liff?.getVersion());
    console.log(liff?.isInClient());
    console.log(liff?.isLoggedIn());
    console.log(liff?.getOS());
    console.log(liff?.getLineVersion());
    if (liff && liff.isLoggedIn()) console.log(liff.getDecodedIDToken())
    liff?.getProfile()
      .then((r) => console.log(r))
    liff?.permission.query("openid")
      .then((r) => console.log(r))
    // amr: ['linesso']
    // aud: "1657709220"
    // exp: 1670233099
    // iat: 1670229499
    // iss: "https://access.line.me"
    // name: "David Li"
    // picture: "https://profile.line-scdn.net/0hBtHAxrwNHVt1ODR7m_ZiDEl9EzYCFhsTDVhTP1I6RTxdDwlZHl5UPVE4RDldCF0FHV1UP1ZrFjte"
    // sub: "U25ecbdd3eba3e2b2b308f8ab40e97a9e"
  }, [liff])
  return (
    <div>
      <Head>
        <title>LIFF App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>create-liff-app</h1>
        {liff && <p>LIFF init succeeded.</p>}
        {liffError && (
          <>
            <p>LIFF init failed.</p>
            <p>
              <code>{liffError}</code>
            </p>
          </>
        )}

      </main>
    </div>
  );
};

export default Home;
