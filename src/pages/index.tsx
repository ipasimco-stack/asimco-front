import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import server_image from "../../public/images/server-3.png";
import arrow_down from "../../public/images/double-down-arrow.png";
import server_box from "../../public/images/box-server-2.png"
import { Divider, Tabs, TabsProps, theme } from "antd";
import StickyBox from 'react-sticky-box';
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";

const categories = [
  {
    name: "انواع CPU",
    items: [
      "Intel i9",
      "Intel i7",
      "AMD Ryzen 9",
      "AMD Ryzen 7",
      "Intel Xeon",
      "AMD Threadripper",
      "Intel i5",
      "AMD Ryzen 5",
      "Intel i3",
      "AMD Ryzen 3",
    ],
  },
  {
    name: "انواع RAM",
    items: [
      "DDR4 16GB",
      "DDR4 32GB",
      "DDR5 64GB",
      "DDR4 16GB",
      "DDR4 32GB",
      "DDR5 64GB",
      "DDR4 32GB",
      "DDR5 64GB",
      "DDR4 16GB",
      "DDR4 32GB",
    ],
  }
];

const features = [
  {
    title: "سرعت فوق‌العاده",
    desc: "تمام سرورها با بالاترین سرعت پردازش برای پروژه‌های حساس و حرفه‌ای.",
    icon: "⚡",
  },
  {
    title: "امنیت بالا",
    desc: "محافظت کامل از داده‌ها و اطلاعات حیاتی با بهترین پروتکل‌ها.",
    icon: "🔒",
  },
  {
    title: "پشتیبانی 24/7",
    desc: "تیم متخصص همیشه آماده پاسخگویی به شماست.",
    icon: "🛠️",
  },
  {
    title: "قابلیت ارتقا",
    desc: "امکان ارتقای سرورها و قطعات به راحتی بدون توقف سرویس.",
    icon: "🔧",
  },
];

const faqs = [
  {
    q: "چگونه می‌توانم بهترین سرور را انتخاب کنم؟",
    a: "با توجه به نیاز پردازشی و فضای ذخیره‌سازی، ما راهنمای انتخاب سرور را ارائه می‌کنیم.",
  },
  {
    q: "آیا امکان ارتقای سخت‌افزار سرورها وجود دارد؟",
    a: "بله، تمامی سرورها قابلیت ارتقا قطعات و حافظه را دارند.",
  },
  {
    q: "پشتیبانی چگونه ارائه می‌شود؟",
    a: "پشتیبانی 24/7 از طریق تلفن، چت آنلاین و ایمیل ارائه می‌شود.",
  },
  {
    q: "سرورها از کدام دیتاسنترها ارائه می‌شوند؟",
    a: "از بهترین دیتاسنترهای داخلی و خارجی با بالاترین کیفیت.",
  },
];

const products1 = [
  { name: "Intel Xeon", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "AMD EPYC", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "Ryzen 9", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "Intel Xeon", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "AMD EPYC", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "Ryzen 9", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "Intel Xeon", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "AMD EPYC", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
  { name: "Ryzen 9", img: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp" },
];

const AnimatedCTA = ({ gradient }: { gradient?: "a" | "b" }) => (
  <a href="/products" className="group relative inline-flex items-center justify-center rounded-xl p-[2px] overflow-hidden">
    <span
      className={`pointer-events-none absolute inset-[-150%] rounded-xl ${gradient === "b"
        ? "bg-[conic-gradient(from_0deg,_#6366f1_0%,_#a855f7_40%,_#ec4899_70%,_#6366f1_100%)]"
        : "bg-[conic-gradient(from_0deg,_#a78bfa_0%,_#f472b6_50%,_#818cf8_100%)]"
        } animate-spin-slow`}
    />
    <span
      className="relative z-10 rounded-[10px] px-7 py-4 !font-bold text-white shadow-lg 
                   bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 
                   bg-[length:200%_200%] animate-gradient-move"
    >
      مشاهده محصولات
      <span className="pointer-events-none absolute -left-10 top-0 h-full w-10 skew-x-12 bg-white/25 blur-sm opacity-0 group-hover:opacity-100 group-hover:animate-sheen" />
    </span>
    <span className="relative z-0 block rounded-xl bg-purple-900/20 backdrop-blur-md" />
  </a>
);



export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);


  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const renderTabBar: TabsProps['renderTabBar'] = (props, DefaultTabBar) => (
    <StickyBox offsetTop={64} offsetBottom={20} style={{ zIndex: 1 }}>
      <DefaultTabBar {...props} style={{ background: colorBgContainer }} />
    </StickyBox>
  );

  return (
    <div className="w-full">
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-700 via-purple-900 to-indigo-900 text-white">
        <div className="absolute w-full h-full top-0 left-0">
          <div className="absolute w-64 h-64 bg-purple-500 rounded-full opacity-30 animate-blob top-10 left-10"></div>
          <div className="absolute w-72 h-72 bg-pink-500 rounded-full opacity-20 animate-blob animation-delay-2000 top-40 right-20"></div>
          <div className="absolute w-48 h-48 bg-indigo-500 rounded-full opacity-25 animate-blob animation-delay-4000 bottom-10 left-1/3"></div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2  gap-12 items-start px-6 md:px-16 max-w-8xl mx-auto">
          <div className="absolute bottom-0 left-1/2">
            <Image src={arrow_down} width={80} height={80} alt="arrow-down" />
          </div>

          <div className="space-y-8 text-center md:text-right w-full">
            <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg animate-fadeIn leading-snug">
              تجهیزات شبکه و سرور را با خیال راحت خرید کنید
            </h1>

            <p className="text-lg md:text-xl text-purple-100 animate-fadeIn text-justify leading-10 delay-500">
              ارائه انواع سرور، پردازنده‌های قدرتمند، رم و ذخیره‌ساز با بالاترین
              کیفیت <br /> پشتیبانی ۲۴/۷ و خدمات اختصاصی برای تمامی کسب‌وکارها
            </p>

            <div className="flex justify-center md:justify-start gap-4 flex-wrap mt-9 animate-fadeIn delay-1000">
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 rounded-md font-bold shadow-lg transition-transform transform hover:scale-105">
                <Link href={"/consultation"}>
                  مشاوره رایگان
                </Link>
              </button>
            </div>
          </div>

          <div className="flex justify-start md:justify-end animate-fadeIn delay-700">
            <Image
              src={server_image}
              width={430}
              height={450}
              alt="سرور دیتاسنتر"
              className="object-cover"
            />
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%,
            100% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }

          @keyframes fadeIn {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s forwards;
          }
          .animate-fadeIn.delay-500 {
            animation-delay: 0.5s;
          }
          .animate-fadeIn.delay-1000 {
            animation-delay: 1s;
          }
          .animate-fadeIn.delay-1500 {
            animation-delay: 1.5s;
          }
          .animate-fadeIn.delay-700 {
            animation-delay: 0.7s;
          }
        `}</style>
      </section>

      <section className="px-6 md:px-16 py-12 space-y-12 bg-purple-100">
        {categories.map((cat, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl !mb-8 md:text-3xl font-bold text-purple-900">
              {cat.name}
            </h2>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {cat.items.map((item, j) => (
                <SwiperSlide key={j}>
                  <div className="bg-white shadow-md rounded-2xl cursor-pointer p-4 text-center hover:shadow-xl transition">
                    <img
                      src={`https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp`}
                      alt={item}
                      className="h-24 md:h-32 object-contain mx-auto mb-2"
                    />
                    <div className="font-semibold text-purple-900">{item}</div>
                    <p className="text-gray-500 text-sm !mt-3">
                      محصول با کیفیت برای استفاده در سرورها و ورک‌استیشن‌ها.
                    </p>
                    <p className="text-purple-800 text-center !mt-4 font-bold">
                      1.300.000 تومان
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </section>

      <section className="px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 mt-[130px]">
        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="flex items-center flex-row-reverse justify-between gap-4 !mb-12 pl-8 !mt-[-100px]">
            <Image
              src={server_box}
              alt="CPU"
              width={200}
              height={200}
            />
            <div>
              <h2 className="text-4xl !font-black !mb-12">پردازنده‌ها (CPU)</h2>
              <div className="">
                <AnimatedCTA gradient="a" />
              </div>
            </div>
          </div>
          <div className="!w-full">

            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
            >
              {products1.map((p, i) => (
                <SwiperSlide key={i} className="bg-white rounded-lg cursor-pointer">
                  <div className="!text-purple-900 rounded-xl shadow-md p-4 flex flex-col items-center">
                    <img src={p.img} alt={p.name} className="h-20 mb-3" />
                    <h3 className="font-semibold">{p.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 text-white rounded-2xl shadow-lg p-6 flex flex-col">
          <div className="flex items-center flex-row-reverse justify-between gap-4 !mb-12 pl-8 !mt-[-100px]">
            <Image
              src={server_box}
              alt="CPU"
              width={200}
              height={200}
            />
            <div>
              <h2 className="text-4xl !font-black !mb-12">پردازنده‌ها (CPU)</h2>
              <div className="">
                <AnimatedCTA gradient="a" />
              </div>
            </div>
          </div>
          <div className="!w-full">

            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 3 },
              }}
            >
              {products1.map((p, i) => (
                <SwiperSlide key={i} className="bg-white rounded-lg cursor-pointer">
                  <div className="!text-purple-900 rounded-xl shadow-md p-4 flex flex-col items-center">
                    <img src={p.img} alt={p.name} className="h-20 mb-3" />
                    <h3 className="font-semibold">{p.name}</h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className="c_container !my-12">
        <Divider orientation="left" orientationMargin={0} className="!font-bold">
          کانفیگ ها
        </Divider>

        <Tabs defaultActiveKey="1" className="!mt-12" renderTabBar={renderTabBar} items={[{
          label: `کانفیگ اول`,
          key: uuidv4(),
          children: `تست متن تب`,
        }]} />
      </section>

      <section className="px-6 md:px-16 py-12 space-y-12 bg-purple-100">
        {categories.map((cat, i) => (
          <div key={i} className="space-y-4">
            <h2 className="text-2xl !mb-8 md:text-3xl font-bold text-purple-900">
              {cat.name}
            </h2>
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000 }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
            >
              {cat.items.map((item, j) => (
                <SwiperSlide key={j}>
                  <div className="bg-white shadow-md rounded-2xl cursor-pointer p-4 text-center hover:shadow-xl transition">
                    <img
                      src={`https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp`}
                      alt={item}
                      className="h-24 md:h-32 object-contain mx-auto mb-2"
                    />
                    <div className="font-semibold text-purple-900">{item}</div>
                    <p className="text-gray-500 text-sm !mt-3">
                      محصول با کیفیت برای استفاده در سرورها و ورک‌استیشن‌ها.
                    </p>
                    <p className="text-purple-800 text-center !mt-4 font-bold">
                      1.300.000 تومان
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </section>

      <section className="text-justify px-6 md:px-16 py-12 bg-purple-50 space-y-4 text-gray-700">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-900 mb-4">
          سرورهای حرفه‌ای برای کسب‌وکار شما
        </h2>
        <p className="text-justify leading-10">
          ما ارائه‌دهنده سرورهای با کیفیت بالا، پردازنده‌های سریع و تجهیزات شبکه
          حرفه‌ای هستیم. محصولات ما با استانداردهای بین‌المللی و پشتیبانی 24/7
          ارائه می‌شوند. انتخاب بهترین سرور برای کسب‌وکار شما اهمیت بالایی دارد
          و ما راهنمایی کامل برای انتخاب صحیح را فراهم کرده‌ایم. از سرورهای
          مجازی گرفته تا سرورهای اختصاصی و تجهیزات شبکه، تمامی نیازهای سازمان
          شما را پوشش می‌دهیم. همچنین با ارائه سرویس‌های سفارشی و امکان ارتقای
          قطعات، تجربه کاربری بی‌نظیری را ارائه می‌کنیم.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-6 px-6 md:px-16 py-12 pt-0 bg-purple-50">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition"
          >
            <div className="text-4xl mb-4">{f.icon}</div>
            <h3 className="font-bold text-lg mb-2 text-purple-900">
              {f.title}
            </h3>
            <p className="text-gray-500 text-sm">{f.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
