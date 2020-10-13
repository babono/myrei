import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Reic() {
  return (
    <Layout>
      <Head>
        <title>Real Estate Investment Calculator</title>
      </Head>
      <h1>Real Estate Investment Calculator</h1>
      <div>
        <div><input type="text" placeholder="house price" /></div>
        <div><input type="text" placeholder="cost of refurbishment" /></div>
        <div><input type="text" placeholder="number of years to calculate investment" /></div>
        <div><input type="text" placeholder="% property interest rate" /></div>
        <div><input type="text" placeholder="property rental value" /></div>
        <div><input type="text" placeholder="% rental rate increase" /></div>
        <div><input type="text" placeholder="annual cost of tax and maintenance" /></div>
        <div><input type="text" placeholder="% increase in cost of tax and maintenance" /></div>
        <button>Submit</button>
      </div>
    </Layout>
  )
}