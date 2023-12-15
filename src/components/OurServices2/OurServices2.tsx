//styles
import styles from "./styles.module.scss"
import global from "@/styles/global.module.scss"
//libs
import classNames from "classnames"
//components
import OurServicesCard from "./OurServices2Card/OurServices2Card"




const CARDS_LEFT_COL = [
  {
    name: "Qualitätsmanagement/Audit",
    text: [
      "Im Bereich Qualitätsmanagement unterstützen wir Ihr Unternehmen.",
      "Wir bieten maßgeschneiderte Lösungen, um Ihre Qualitätsstandards zu erhöhen und die Einhaltung von Vorschriften zu gewährleisten. Vertrauen Sie auf unsere Expertise und gemeinsam stärken wir Ihre Qualitätssicherung für einen reibungslosen Ablauf."
    ]
  },
  {
    name: "Prozessmanagement/Lieferkettenoptimierung",
    text: [
      "Im Bereich Prozessmanagement und Lieferkettenoptimierung helfen wir Ihnen, Effizienz und Leistung zu steigern.",
      "Unsere erprobten Methoden ermöglichen es Ihnen, Geschäftsabläufe zu optimieren und nachhaltige Wettbewerbsvorteile zu erzielen. Profitieren Sie von unserer Expertise und gemeinsam optimieren wir Ihre Prozesse für langfristigen Erfolg!"
    ]
  }
]
const CARDS_RIGHT_COL = [
  {
    name: "Businessdevelopment",
    text: [
      "Im Bereich Business Development unterstützen wir Sie dabei, Wachstum und Innovation in Ihr Unternehmen zu bringen.",
      "Vom Laufband bis zur Lieferkette, bei uns sind Sie rundum versorgt."
    ]
  },
  {
    name: "Seminare",
    text: [
      'Unsere "Seminare" bieten maßgeschneiderte Schulungen, um Ihr Fachwissen und Ihre Fähigkeiten zu erweitern. Ganz gleich, ob Sie Ihr Qualitätsmanagement, Prozessmanagement, oder Ihr Business Development verbessern möchten, unsere Seminare sind auf Ihre Bedürfnisse zugeschnitten. Vertrauen Sie auf unsere Expertise, um Ihr Unternehmen auf den Weg zum Erfolg zu führen.'
    ]
  }
]

const OurServicesDetails = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <div className={classNames(styles.titleBlock)}>
          <h2 className={global.H2}>
            UNSERE DIENSTLEISTUNGEN
          </h2>
        </div>
        <div className={styles.cardBlock}>
          <div className={styles.leftCol}>
            {
              CARDS_LEFT_COL.map(({ name, text }, index) => <OurServicesCard name={name} text={text} key={index} />)
            }
          </div>
          <div className={styles.rightCol}>
            {
              CARDS_RIGHT_COL.map(({ name, text }, index) => <OurServicesCard name={name} text={text} key={index} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServicesDetails