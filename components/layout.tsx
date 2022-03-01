import Head from 'next/head';
import Link from 'next/link';
import { Page } from '../types/types';
import styles from '../styles/Index.module.css';

export default function Layout({
  children,
  otherPage
}: {
  children: React.ReactNode,
  otherPage: Page
}) {
  const { title, route } = otherPage;
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="ClimateScience | Jillian Breau"
        />
      </Head>
      <main>{children}</main>
      <div className={styles.navigate}>
        <Link href={`/${route}`}>
          <a>{`Go to ${title}`}</a>
        </Link>
      </div>
    </div>
  )
};
