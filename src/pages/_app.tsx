import "@/styles/globals.css"
import "antd/dist/reset.css"
import type { AppProps } from "next/app"
import { Header } from "../components/shared/header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="relative !mt-12">
        <div className="bg-blobs"></div>

        <div className="c_container relative z-10">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
