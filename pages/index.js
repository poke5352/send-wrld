import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Send WRLD</title>
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
