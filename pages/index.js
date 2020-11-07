import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ServiceItem from '../components/ServiceItem'
import ServiceList from '../components/ServiceList'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <p>Welcome to MYREI</p>
        <p>What do you want to do today?</p>
        <ServiceList >
          
            <ServiceItem />
          
        </ServiceList>
      </div>
    </Layout>
  )
}