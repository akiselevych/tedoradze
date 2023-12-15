//components
import Link from "next/link"
import PageBanner from "@/components/PageBanner/PageBanner"
import ContactUsBanner from "@/components/СontactUsBanner/СontactUsBanner"
import HelpBanner from "@/components/HelpBanner/HelpBanner"
import OurServicesDetails from "@/components/OurServices2/OurServices2"
import styles from "./styles.module.scss"
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: "Tedoradze | Dienstleistungen",
  description: "Lassen Sie uns Ihre Unternehmensqualität steigern! Wir bieten ein umfassendes Portfolio an Dienstleistungen für Qualitätsmanagement, Audit, Business Development, Seminare und Prozessmanagement/Lieferkettenoptimierung an. Besuchen Sie unsere Serviceseite, um mehr zu erfahren und ein kostenloses Angebot anzufordern."
}

const Page = () => {
  return (
    <div className={styles.pageWrapper}>
      <PageBanner
        nextBlockLink="#unsereDienstleistungenContactBanner"
        topText={<p>Willkommen</p>}
        title={"DIENSTLEISTUNGEN"}
        subtitle={""}
        btnText="JETZT KONTAKTIEREN"
      />
      <HelpBanner />
      <OurServicesDetails />
      <ContactUsBanner id="unsereDienstleistungenContactBanner" />
    </div>
  )
}

export default Page