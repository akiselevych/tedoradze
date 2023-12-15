//components
import PageBanner from "@/components/PageBanner/PageBanner"
import OurServices from "@/components/OurServices/OurServices";
import UberUnsBlock from "@/components/UberUnsBlock/UberUnsBlock";
import ContactUsBanner from "@/components/СontactUsBanner/СontactUsBanner"
import ReviewsSlider from "@/components/ReviewsSlider/ReviewsSlider";
//styles
import global from "@/styles/global.module.scss"
import styles from "@/styles/mainPage.module.scss"

import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Tedoradze",
  description: "Qualitätsmanagement, Schulungen/Seminare, Prozessmanagement/Lieferkettenoptimierung und Business Development: Wir unterstützen Sie bei Ihren Unternehmenszielen!"
}

export default async function Home() {
  return (
    <div className={styles.pageWrapper}>
      <PageBanner
        nextBlockLink="#UberUnsContactBanner"
        topText={<p><span className={global.orangeText}>WILLKOMMEN</span></p>}
        title="MERAB TEDORADZE UNTERNEHMENSBERATUNG"
        subtitle=""
        btnText="JETZT KONTAKTIEREN" />
      <OurServices />
      <UberUnsBlock />
      {/* <ReviewsSlider /> */}
      <ContactUsBanner id="UberUnsContactBanner" />
    </div >

  )
}
