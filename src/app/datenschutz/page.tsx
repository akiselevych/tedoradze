//styles
import global from "@/styles/global.module.scss"
import styles from './styles.module.scss'
//lbs
import classNames from "classnames"
//components
import Link from "next/link"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Tedoradze | Datenschutz",
  description: "Erfahren Sie, wie wir Ihre persönlichen Daten auf unserer Website schützen. Wir nehmen Ihre Privatsphäre ernst und sind uns verpflichtet, Ihre Daten sicher zu halten."
}

const Page = () => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.content)}>
        <h1 className={classNames(global.H1, styles.title)}>
          DATENSCHUTZ
        </h1>
        <div className={classNames(styles.card)}>
          <h2 className={classNames(global.H2, styles.secondTitle)}>
            DATENSCHUTZ AUF EINEN BLICK
          </h2>
          <div className={styles.textBlock}>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Allgemeine Hinweise
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Datenerfassung auf dieser Website
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Wer ist verantwortlich für die Datenerfassung auf dieser Website?
                </div>
                <div>
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Wie erfassen wir Ihre Daten?
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                </div>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                <div>
                </div>
                Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                <div>
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Wofür nutzen wir Ihre Daten?
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                </div>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                <div>
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Welche Rechte haben Sie bezüglich Ihrer Daten?
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                </div>
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
                <div>
                </div>
              </div>
            </div>
          </div>
          <h2 className={classNames(global.H2, styles.secondTitle)}>
            HOSTING
          </h2>
          <div className={styles.textBlock}>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Externes Hosting
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </div>
                <div>
                  Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </div>
                <div>
                  Als Hoster ist eingesetzt:
                </div>
                <div>
                  IONOS SE
                </div>
                <div>
                  Elgendorfer Str. 57
                </div>
                <div>
                  56410 Montabaur
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
          <h2 className={classNames(global.H2, styles.secondTitle)}>
            ALLGEMEINE HINWEISE UND PFLICHTINFORMATIONEN
          </h2>
          <div className={styles.textBlock}>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Datenschutz
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitenzugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                </div>
                <div>
                  Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.                </div>
                <div>
                  Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Hinweis zur verantwortlichen Stelle
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </div>
                <div>
                  Merab Tedoratze Unternehmensberatung
                </div>
                <div>
                  Werastr 126
                </div>
                <div>
                  70190 Stuttgart
                </div>
                <Link href="tel:+491777376989">
                  +49 177 7376989
                </Link>
                <Link href="mailto:info@tedoradze.consulting">
                  info@tedoradze.consulting
                </Link>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Widerruf Ihrer Einwilligung zur Datenverarbeitung
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt. Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Recht auf Datenübertragbarkeit
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                </div>
              </div>
            </div>
          </div>
          <h2 className={classNames(global.H2, styles.secondTitle)}>
            DATENERFASSUNG AUF DIESER WEBSITE
          </h2>
          <div className={styles.textBlock}>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Cookies
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Die Internetseiten verwenden technische notwendige Cookies. Diese dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                </div>
                <div>
                  Soweit andere Cookies gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Server-Log-Dateien
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </div>
                <div className={styles.textWithDot}>
                  Browsertyp und Browserversion
                </div>
                <div className={styles.textWithDot}>
                  verwendetes Betriebssystem
                </div>
                <div className={styles.textWithDot}>
                  Referrer URL
                </div>
                <div className={styles.textWithDot}>
                  Hostname des zugreifenden Rechners
                </div>
                <div className={styles.textWithDot}>
                  Uhrzeit der Serveranfrage
                </div>
                <div className={styles.textWithDot}>
                  IP-Adresse
                </div>
                <div>
                  Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </div>
                <div>
                  Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Kontaktformular
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </div>
                <div>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Anfrage per E-Mail, Telefon oder Telefax
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                </div>
                <div>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen haben.
                </div>
                <div>
                  Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Verarbeiten von Daten (Kunden- und Vertragsdaten)
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Wir erheben, verarbeiten und nutzen personenbezogene Daten nur, soweit sie für die Begründung, inhaltliche Ausgestaltung oder Änderung des Rechtsverhältnisses erforderlich sind (Bestandsdaten). Dies erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet. Personenbezogene Daten über die Inanspruchnahme dieser Website (Nutzungsdaten) erheben, verarbeiten und nutzen wir nur, soweit dies erforderlich ist, um dem Nutzer die Inanspruchnahme des Dienstes zu ermöglichen oder abzurechnen.
                </div>
                <div>
                  Die erhobenen Kundendaten werden nach Abschluss des Auftrags oder Beendigung der Geschäftsbeziehung gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                Datenübermittlung bei Vertragsschluss für Dienstleistungen und digitale Inhalte
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Wir übermitteln personenbezogene Daten an Dritte nur dann, wenn dies im Rahmen der Vertragsabwicklung notwendig ist, etwa an das mit der Zahlungsabwicklung beauftragte Kreditinstitut.
                </div>
                <div>
                  Eine weitergehende Übermittlung der Daten erfolgt nicht bzw. nur dann, wenn Sie der Übermittlung ausdrücklich zugestimmt haben. Eine Weitergabe Ihrer Daten an Dritte ohne ausdrückliche Einwilligung, etwa zu Zwecken der Werbung, erfolgt nicht.
                </div>
                <div>
                  Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
                </div>
              </div>
            </div>
          </div>
          <h2 className={classNames(global.H2, styles.secondTitle)}>
            INHALTE DRITTER AUF DER WEBSEITE
          </h2>
          <div className={styles.textBlock}>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Unser Internetauftritt integriert Inhalte anderer Anbieter. Dies können reine Content-Elemente (z.B. Nachrichten, Neuigkeiten), aber auch Widgets (Funktionen, wie z.B. Buchungssysteme) oder z.B. Schriften und technische Bibliotheken sein. Dazu gehören auch Google Fonts. Aus technischen Gründen erfolgt dies, indem diese Inhalte vom Browser von anderen Servern geladen werden. In diesem Zusammenhang werden die aktuell von Ihrem Browser verwendete IP und der verwendete Browser des anfragenden Systems übermittelt. Bitte beachten Sie diesbezüglich die jeweiligen Datenschutzerklärungen der Drittanbieter.
                </div>
              </div>
            </div>
            <div className={classNames(global.Body2, styles.textBlockItem)}>
              <h3 className={classNames(global.H3, styles.textBlockItemTile)}>
                OpenStreetMaps
              </h3>
              <div className={styles.textBlockItemTextWrapper}>
                <div>
                  Wir nutzen Darstellung von Geo-Daten den Open-Source-Karten-Dienst „OpenStreetMaps“ (auch „OSM“ genannt) der Firma OpenStreetMap Foundation, 132 Maney Hill Road, Sutton Coldfield, West Midlands, B72 1JU, United Kingdom. OSM dient dazu, eine interaktive Karte auf unserer Webseite anzubieten, die Ihnen zeigt, wie Sie uns finden und erreichen können. Dieser Dienst ermöglicht es uns, unsere Webseite ansprechend darzustellen, indem Kartenmaterial von einem externen Server geladen wird. Folgende Daten werden bei der Darstellung an die Server von OSM übertragen: Diejenige unserer Internetseiten, die Sie besucht haben, die IP-Adresse Ihres Endgerätes sowie von Ihnen zur Routenplanung eingegebene Daten. Die Rechtsgrundlage für die Verarbeitung Ihrer Daten in Bezug auf den Dienst „OSM“ ist Art. 6 Abs. 1 S. 1 Buchstabe f) DSGVO (Berechtigtes Interesse an der Datenverarbeitung). Das berechtigte Interesse ergibt sich aus unserem Bedarf an einer ansprechenden Darstellung unseres Online-Angebots und der leichten Auffindbarkeit der auf unserer Homepage angegebenen Orte.
                </div>
                <div>
                  Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von OSM:<br /> <Link className={styles.link} href={"https://wiki.osmfoundation.org/wiki/Privacy_Policy"}>https://wiki.osmfoundation.org/wiki/Privacy_Policy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Page