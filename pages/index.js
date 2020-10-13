import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Welcome to MYREI</p>
        <p>What do you want to do today?</p>
        <div>
          <Link href="/reic">
            <div>REIC</div>
          </Link>
        </div>
      </section>
    </Layout>
  )
}