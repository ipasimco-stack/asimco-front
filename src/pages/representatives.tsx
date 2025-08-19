import { Divider } from "antd";
import Marquee from "react-fast-marquee";
import FakeImage from '../../public/images/user-profile.gif'
import Image from "next/image";

export default function Representatives() {
    const representatives = [
        {
            name: "شرکت راهبردهای فناورانه کاوش پردازش",
            address: "استان یزد، یزد، بلوار شهید اشرف، ساختمان آرامیس واحد ۶",
            phone: "۰۳۵-۹۱۰۰۱۰۹۰",
            logo: "https://kavoshpardazesh.ir/wp-content/uploads/2025/02/44-4-6.webp",
        },
        {
            name: "شرکت رایمند ارتباطات نقض جهان",
            address: "استان اصفهان، خیابان شیخ بهایی، ساختمان ۵۰۲ واحد",
            phone: "۰۳۱-۳۱۱۱۲",
            logo: "https://raymandnet.ir/wp-content/uploads/2021/01/logo-Raymandnet-1.png",
        },
        {
            name: "شرکت سهند",
            address: "آذربایجان شرقی، مرند، خیابان شمس تبریزی پلاک ۲۲۴",
            phone: "۰۴۱-۴۲۲۴۰۹۷۹",
            logo: "data:image/png;base64,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",
        },
        {
            name: "شرکت شبکه افزار سامان دیار",
            address: "مشهد، بلوار شهید دستغیب ۳۷، پیام ۱۶، پاساژ تک واحد",
            phone: "۰۵۱-۳۷۶۴۵۶۳۰",
            logo: "https://samannetware.ir/wp-content/uploads/2025/02/%D8%B4%D8%A8%DA%A9%D9%87-%D8%A7%D9%81%D8%B2%D8%A7%D8%B1-%D8%B3%D8%A7%D9%85%D8%A7%D9%86-%D8%AF%DB%8C%D8%A7%D8%B1-2-1-1-1.png",
        },
        {
            name: "شرکت مهندسی هدیش الکترونیک پیشرو",
            address: "کرمان، پارک مطهری، ابتدای خیابان احمد غربی، مجتمع هدیش",
            phone: "۰۳۴-۳۲۵۱۸۸۸۸",
            logo: "https://hadishpishro.ir/wp-content/uploads/2019/12/logo2.png",
        },
    ];

    return (
        <div className="">
            <Divider orientation="left" orientationMargin={0} className="!font-bold !mb-10">
                نمایندگان رسمی شرکت
            </Divider>

            <p className="text-center text-gray-600 mb-8">
                تعداد تعمیرگاه‌های مجاز: {representatives.length}
            </p>

            <div className="overflow-hidden relative my-12">
                <Marquee gradient pauseOnHover={true}
                    className="overflow-hidden border-t border-b border-gray-200"
                >
                    {representatives.map((rep, i) => (
                        <div className="text-center">
                            <Image
                                key={`first-${i}`}
                                src={rep.logo}
                                width={20}
                                height={20}
                                alt={rep.name}
                                className="h-20 w-auto object-contain pl-12"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {representatives.map((rep, i) => (
                    <div
                        key={i}
                        className="rounded-2xl shadow-lg p-6 flex flex-col gap-2 justify-between hover:shadow-xl transition"
                    >
                        <h2 className="text-lg font-bold mb-2">{rep.name}</h2>
                        <p className="text-gray-700 mb-2">{rep.address}</p>
                        <p className="text-orange-600 font-semibold">{rep.phone}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
