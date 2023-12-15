//components
import { ReactNode } from "react"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import { Metadata } from "next"
import { baseImageUrl } from "@/services/API"
//styles
import "@/styles/global.scss"
import Banner from "@/components/Banner/Banner";



export const metadata: Metadata = {
  title: 'Tedoradze'
}

export default function RootLayout({
  children,
  params: {
    lng
  }
}: {
  children: ReactNode,
  params: {
    lng: string
  }
}) {
  return (
    <html lang="en">
      <link rel="icon" href={`${baseImageUrl}/icons/favicon.svg`} />
      <body>
        <Header lng={lng} />
        <main>
          {children}
          <Banner/>
        </main>
        <Footer lng={lng} />
      </body>
    </html>
  )
}
