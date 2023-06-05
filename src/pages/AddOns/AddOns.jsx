import './AddOns.scss'
import { SummarySection } from '../../components/SummarySection/SummarySection'
import { BannerSection } from '../../components/BannerSection/BannerSection'
import { Footer } from '../../components/Footer/Footer'

export function AddOns() {
  return (
    <>
      <main id="add-ons">
        <SummarySection />
        <BannerSection />
      </main>
      <Footer />
    </>
  )
}
