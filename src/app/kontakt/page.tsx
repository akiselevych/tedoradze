//components
import Link from "next/link"
import PageBanner from "@/components/PageBanner/PageBanner"
import ContactPageBanner from "@/components/ContactPageBanner/ContactPageBanner"
import ContactForm from "@/components/ContactForm/ContactForm"
import styles from "./styles.module.scss"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tedoradze | Kontakt",
  description: "Sie haben Fragen oder Anregungen? Kontaktieren Sie uns einfach über unsere Kontaktseite. Wir beantworten Ihre Anfrage schnellstmöglich."
}

const Page = () => {
  return (
    <div className={styles.pageWrapper}>
      <PageBanner
        nextBlockLink="#contactPageForm"
        topText={<p>Willkommen</p>}
        title={"KONTAKT"}
        subtitle={""}
        btnText="JETZT KONTAKTIEREN"
      />
      <ContactPageBanner />
      <ContactForm />
    </div>
  )
}

export default Page