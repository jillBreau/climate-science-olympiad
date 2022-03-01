import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Layout from '../components/layout';
import { Page } from '../types/types';
import { calculatePercentiles } from '../lib/percentiles/calculatePercentiles';

export default function Home() {
  const animationPage: Page = {
    title: "Animation Page",
    route: ""
  }

  calculatePercentiles();

  return (
    <div className={styles.container}>
      <Layout otherPage={animationPage}>
        <Head>
          <title>ClimateScience percentiles | Jillian Breau</title>
        </Head>
        <main className={styles.main}>
          percentiles
        </main>
      </Layout>
    </div>
  )
}