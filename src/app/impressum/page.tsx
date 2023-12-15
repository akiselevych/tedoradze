//styles
import global from "@/styles/global.module.scss"
import styles from './styles.module.scss'
//lbs
import classNames from "classnames"
//components
import Link from "next/link"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tedoradze | Impressum",
  description: "Auf unserer Impressum-Seite finden Sie alle wichtigen Informationen zu unserem Unternehmen, wie z.B. Name, Anschrift, Kontaktinformationen und Handelsregisternummer."
}


const Page = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <h1 className={classNames(global.H1, styles.title)}>
          IMPRESSUM
        </h1>
        <div className={classNames(styles.infoBlock)}>
          <div className={classNames(styles.leftCol, global.Body2)}>
            <div className={styles.textItem}>
              Merab Tedoradze Unternehmensberatung
            </div>
            <div className={styles.textItem}>
              Inh. Merab Tedoratze
            </div>
            <div className={styles.textItem}>
              Werastr. 126, 70190 Stuttgart
            </div>
            <div className={styles.textItem}>
              USt-ID Nr.: DE353696916
            </div>
            <Link href={"tel:491777376989"} className={styles.textItem}>
              Kontakt: +49 177 7376989
            </Link>
            <Link href="mailto:info@tedoratze.consulting" className={styles.textItem}>
              info@tedoratze.consulting
            </Link>
          </div>
          <div className={classNames(styles.rightCol, global.Body2)}>
            <h5 className={classNames(global.H5)}>Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz</h5>
            <div className={classNames(styles.colTextBlock, global.Body2)}>
              <div className={styles.textItem}>
                (VSBG): Merab Tedoradze Unternehmensberatung ist zur Teilnahme an Streitbeilegungsverfahren vor Schlichtungsstellen weder verpflichtet noch bereit. Informationen zur Online-Streitbeilegung:
              </div>
              <div className={styles.textItem}>
                Die EU-Kommission hat eine Internetplattform zur Online-Beilegung von Streitigkeiten (sog. „OS-Plattform“) geschaffen. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus Online-Kaufverträgen erwachsen. Sie können die OS-Plattform unter dem folgenden Link erreichen:
              </div>
              <Link target="_blank" href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage" className={styles.textItem}>
                https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page