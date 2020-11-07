import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'
import { withStyles, styled } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';
import styles from '../styles/pages/reic.module.scss'

const ButtonSubmit = styled(Button)({
  background: '#FEC23A',
});

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#0E5563',
    },    
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0E5563',
      },
      '&:hover fieldset': {
        borderColor: '#0E5563',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0E5563',
      },
    },
  },
})(TextField);

export default function Reic() {
  return (
    <Layout>
      <Head>
        <title>Real Estate Investment Calculator</title>
      </Head>
      <h1>Real Estate Investment Calculator</h1>      
      <form noValidate autoComplete="off">        
        <div className={styles.formRow}><CssTextField fullWidth id="house-price" label="House Price" variant="outlined" /></div>
        <div className={styles.formRow}><CssTextField fullWidth id="cost-refurbishment" label="Cost of Refurbishment" variant="outlined" /></div>
        <div className={styles.formRow}><CssTextField fullWidth id="number-year" label="Number of Years to Calculate Investment" variant="outlined" /></div>
        <div className={styles.formRow}><CssTextField fullWidth id="property-interest-rate" label="Property Interest Rate (%)" variant="outlined" /></div>
        <div className={styles.formRow}><CssTextField fullWidth id="property-rental-value" label="Property Rental Value" variant="outlined" /></div>
        <div className={styles.formRow}><CssTextField fullWidth id="rental-rate-increase" label="Rental Rate Increase (%)" variant="outlined" /></div>
        <div className={styles.formRow}><CssTextField fullWidth id="annual-cost-tax-maintenance" label="Annual Cost of Tax and Maintenance" variant="outlined" /></div>
        <div className={styles.formRow}><CssTextField fullWidth id="annual-cost-tax-maintenance-rate" label="Increase in Cost of Tax and Maintenance (%)" variant="outlined" /></div>
        <ButtonSubmit variant="contained" >Submit</ButtonSubmit>
      </form>
      <br /><br /><br />
      <div >
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </Layout>
  )
}