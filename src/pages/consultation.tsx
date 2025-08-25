import { FaPhone } from "react-icons/fa";

export default function ConsultationPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="bg-white flex flex-col gap-5 rounded-2xl shadow-xl max-w-lg w-full text-center p-8">
                <h1 className="text-2xl font-bold text-gray-800 mb-4">
                    مشاوره رایگان
                </h1>

                <p className="text-gray-600 text-right mb-6 leading-relaxed">
                    اگر نیاز به راهنمایی یا مشاوره دارید، کارشناسان ما آماده پاسخگویی به شما هستند.
                    می‌توانید همین حالا با شماره زیر تماس بگیرید:
                </p>

                <h2 className="text-xl font-semibold text-blue-600 mb-4 flex items-center justify-center gap-2">
                    <a href="tel:02112345678" className="hover:underline">
                        021-12345678
                    </a>
                    <FaPhone className="text-blue-600" />
                </h2>

                <p className="text-sm text-gray-500 mb-8">
                    ساعات پاسخگویی: شنبه تا چهارشنبه 9 تا 17:30 – پنجشنبه 9 تا 13
                </p>

                <a
                    href="tel:02112345678"
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md shadow-md transition"
                >
                    <FaPhone className="text-white" />
                    تماس مستقیم
                </a>
            </div>
        </div>
    );
}
