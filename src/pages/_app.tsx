import "@/styles/globals.css"
import "antd/dist/reset.css"
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { AppProps } from "next/app"
import { Header } from "../components/shared/header"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="relative !mt-[120px]">
        <div className="bg-blobs"></div>

        <div className="relative">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}
