import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Send WRLD</title>
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://send-wrld-to.me/" />
        <meta property="og:image" content="" />
        <meta
          property="og:description"
          content="Do you have tons of useless WRLD?
        If you do, you should send it to me:
        0x2A66D7ff23a74174e1f9807A6043a9Ad478be63f"
        />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta name="theme-color" content="#add8e6" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Send-WRLD-to.me!</h1>

        <p className={styles.description}>
          Get started by clicking the button below or sending WRLD to {''}
          <code className={styles.code}>
            0x2A66D7ff23a74174e1f9807A6043a9Ad478be63f
          </code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://nftworlds.com/pay?to=0x2A66D7ff23a74174e1f9807A6043a9Ad478be63f"
            className={styles.card}
          >
            <h3>Send WRLD to me &rarr;</h3>
            <p>
              Do you have useless amounts of WRLD? If yes, you should send it to
              me :)
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
