import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Reic() {
  return (
    <Layout>
      <Head>
        <title>Real Estate Investment Calculator</title>
      </Head>
      <h1>Real Estate Investment Calculator</h1>
      <div>
        <input type="text" placeholder="house price" />
        <input type="text" placeholder="cost of refurbishment" />
        <input type="text" placeholder="number of years to calculate investment" />
        <input type="text" placeholder="% property interest rate" />
        <input type="text" placeholder="property rental value" />
        <input type="text" placeholder="% rental rate increase" />
        <input type="text" placeholder="annual cost of tax and maintenance" />
        <input type="text" placeholder="% increase in cost of tax and maintenance" />
        <button>Submit</button>
      </div>
    </Layout>
  )
}