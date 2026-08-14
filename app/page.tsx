import { SpecNoticeBar, SpecNoticeFooter } from '@/components/SpecNotice'
import { Nav } from '@/components/Nav'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { ServiceArea } from '@/components/ServiceArea'
import { HowItWorks } from '@/components/HowItWorks'
import { Faq } from '@/components/Faq'
import { Booking } from '@/components/Booking'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <SpecNoticeBar />
      <Nav />
      <main id="main">
        <Hero />
        <Services />
        <ServiceArea />
        <HowItWorks />
        <Faq />
        <Booking />
      </main>
      <SpecNoticeFooter />
      <Footer />
    </>
  )
}
