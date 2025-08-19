import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import server_image from "../../public/images/server-3.png";
import arrow_down from "../../public/images/double-down-arrow.png";

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
  },
  {
    name: "انواع Hard",
    items: [
      "SSD NVMe",
      "HDD 2TB",
      "Enterprise SSD",
      "SSD NVMe",
      "HDD 2TB",
      "Enterprise SSD",
      "Enterprise SSD",
      "SSD NVMe",
      "HDD 2TB",
      "Enterprise SSD",
    ],
  },
  {
    name: "انواع Server",
    items: [
      "Server G10",
      "Server G9",
      "Server G8",
      "Server G10",
      "Server G9",
      "Server G8",
      "Server G8",
      "Server G10",
      "Server G9",
      "Server G8",
    ],
  },
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

export default function HomePage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

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
            <h1 className="text-4xl md:text-6xl font-black drop-shadow-lg animate-fadeIn w-max leading-snug">
              تجهیزات شبکه و سرور را با خیال راحت
              <br />
              خرید کنید
            </h1>

            <p className="text-lg md:text-xl text-purple-100 animate-fadeIn text-justify leading-10 delay-500">
              ارائه انواع سرور، پردازنده‌های قدرتمند، رم و ذخیره‌ساز با بالاترین
              کیفیت <br /> پشتیبانی ۲۴/۷ و خدمات اختصاصی برای تمامی کسب‌وکارها
            </p>

            <div className="flex justify-center md:justify-start gap-4 flex-wrap mt-9 animate-fadeIn delay-1000">
              <button className="bg-purple-600 hover:bg-purple-500 text-white px-10 py-5 rounded-md font-bold shadow-lg transition-transform transform hover:scale-105">
                مشاوره رایگان
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
            <h2 className="text-2xl md:text-3xl font-bold text-purple-900">
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

      <section className="px-6 md:px-16 py-12 bg-purple-100 space-y-6">
        <h2 className="text-3xl font-bold text-purple-900 text-center mb-6">
          سوالات متداول
        </h2>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-6 cursor-pointer hover:shadow-xl transition"
            onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
          >
            <h3 className="font-semibold text-purple-900 text-lg">{faq.q}</h3>
            {activeFAQ === i && <p className="mt-2 text-gray-600">{faq.a}</p>}
          </div>
        ))}
      </section>
    </div>
  );
}
