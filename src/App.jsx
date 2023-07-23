import React from 'react'
import { 
  Billing, 
  Business, 
  CardDeal, 
  Clients, 
  CTA, 
  Footer, 
  Hero, 
  Navbar, 
  Stats, 
  Testimonials 
} from './components'
import styles from './style'
import About from './components/About'

const App = () => {
  return (
    <div className='bg-primary w-full '>
      <div className={`${styles.paddingX} ${styles.flexCenter} sticky top-0 z-20 bg-gray-900`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>      
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats/> */}
          <About/>
          {/* <Billing/> */}
          <CardDeal/>
          <Testimonials/>
          {/* <Clients/> */}
          <CTA/>
          <Footer/>     
        </div>
      </div>
    </div>
  )
}

export default App