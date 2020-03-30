import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const calculatorPage = () => (
  <Layout>
    <SEO title="MYREI Calculator" />
    <h1>Real Estate Investment Calculator</h1>
    <form>
      <div>
        <div>Date</div>
        <div></div>
      </div>
      <div>
        <div>Year</div>
        <div></div>
      </div>
      <h2>Main Info</h2>
      <div>
        <div>Investment Objective</div>
        <div></div>
      </div>
      <div>
        <div>Expected Annual Unleverged Investment Return</div>
        <div></div>
      </div>
      <h2>Location Detail</h2>
      <div>
        <div>Province</div>
        <div></div>
      </div>
      <div>
        <div>City or regency</div>
        <div></div>
      </div>
      <div>
        <div>Kecamatan</div>
        <div></div>
      </div>
      <div>
        <div>Kelurahan</div>
        <div></div>
      </div>
      <div>
        <div>Address</div>
        <div></div>
      </div>
      <div>
        <div>Google Maps Pin</div>
        <div></div>
      </div>
      <h2>Real Estate Attribute</h2>
      <div>
        <div>
          <div>Real Estate Type</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Title Deeds</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Building Area</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Number of floor</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Number of bedroom</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Number of bedroom</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Acquisition price</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Acquisition cost</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Acquisition total cost</div>
          <div></div>
        </div>
      </div>
      <h2>Investment plan:</h2>
      <div>
        <div>
          <div>Holding Period</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Estimated initial refurbishment cost</div>
          <div></div>
        </div>
      </div>
      <div>
        <div>
          <div>Estimated annual operating and maintenance costs</div>
          <div>Inflate cost annually?</div>
          <div>How much per year in percentage?</div>
        </div>
      </div>
      <div>
        <div>
          <div>Estimated annual land and building tax</div>
          <div>Inflate cost annually?</div>
          <div>How much per year in percentage?</div>
        </div>
      </div>
      <div>
        <div>
          <div>Estimated annual rental income</div>
          <div>Inflate cost annually?</div>
          <div>How much per year in percentage?</div>
        </div>
      </div>
      <div>
        <div>
          <div>Estimated sale price in the future:</div>
          <div>Own Assumption in a rounder number</div>
          <div>Estimated sale price in the future </div>
          <div>Using annual property price growth assumption</div>
          <div>How much per year in percentage (%)?</div>
        </div>
      </div>
      <div>
        <div>
          <div>Leverage</div>
          <div>Loan To Value Ratio</div>
          <div>Loan Term</div>
          <div>Loan amortization period</div>
          <div>Assume an annual flat interest rate</div>
          <div>Debt service covenant ratio (DSCR)</div>
          <div>Maximum annual debt service (Max ADS)</div>
          <div>Maximum loan amount</div>
          <div>Loan received for acquisition</div>
          <div>Implied loan to value (LTV)</div>
          <div>Loan arrangement fees</div>
          <div>Loan received</div>
          <div>Estimated sale price in the future</div>
          <div>Net ending investment value</div>
        </div>
      </div>
      <h2>Calculate annual investment return</h2>
      <h2>
        Determine sale price in the future to achieve your expected annual
        investment return
      </h2>
      <h2>
        Determine acquisition total price to achieve your expected annual
        investment return
      </h2>
      <h2>Compare your annual expected unleveraged return with others</h2>
    </form>
  </Layout>
)

export default calculatorPage
