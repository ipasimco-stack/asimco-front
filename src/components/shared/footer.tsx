"use client";
import Link from "next/link";
import { FaInstagram, FaTelegram, FaTwitter, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white pt-12 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-purple-700/40 pb-10">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">🖥️ سرورنت</h2>
          <p className="text-sm text-purple-200 leading-relaxed">
            ارائه‌دهنده سرورهای قدرتمند، تجهیزات شبکه و خدمات ابری با پشتیبانی ۲۴ ساعته.  
            هدف ما ایجاد زیرساختی پایدار برای رشد کسب‌وکار شماست.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">لینک‌های سریع</h3>
          <ul className="space-y-3 text-purple-200 text-sm">
            <li><Link href="/" className="hover:text-white transition">صفحه اصلی</Link></li>
            <li><Link href="/products" className="hover:text-white transition">محصولات</Link></li>
            <li><Link href="/pricing" className="hover:text-white transition">قیمت‌ها</Link></li>
            <li><Link href="/about" className="hover:text-white transition">درباره ما</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">تماس با ما</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">خدمات</h3>
          <ul className="space-y-3 text-purple-200 text-sm">
            <li>هاستینگ و دامنه</li>
            <li>سرور اختصاصی</li>
            <li>سرور ابری (Cloud)</li>
            <li>مشاوره زیرساخت</li>
            <li>پشتیبانی ۲۴/۷</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">تماس با ما</h3>
          <ul className="space-y-3 text-purple-200 text-sm">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> تهران، خیابان فناوری، برج سرورنت
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> ۰۲۱-۱۲۳۴۵۶۷۸
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@servernet.ir
            </li>
          </ul>
          <div className="flex gap-4 mt-5">
            <Link href="#" className="w-9 h-9 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition"><FaInstagram/></Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition"><FaTelegram/></Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition"><FaTwitter/></Link>
            <Link href="#" className="w-9 h-9 rounded-full bg-purple-700 hover:bg-purple-600 flex items-center justify-center transition"><FaLinkedin/></Link>
          </div>
        </div>
      </div>

      <div className="text-center text-purple-300 text-sm mt-6">
        © {new Date().getFullYear()} سرورنت | تمامی حقوق محفوظ است.
      </div>
    </footer>
  );
}
