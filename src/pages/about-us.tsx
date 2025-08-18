import { Avatar, Divider, Segmented } from "antd";
import { UserOutlined } from '@ant-design/icons';
import CyclicalCounter from "@/utils/cyclical-counter";
import TeamSection from "@/components/about-us/team-box";

function AboutUs() {
    return <div className="">
        <section>
            <div>
                <Divider orientation="left" orientationMargin={0} className="!font-bold">
                    معرفی شرکت
                </Divider>
            </div>
            <div>
                <p className="text-justify leading-12 text-sm">
                    شرکت فناوری اطلاعات کارا شبکه آسیم با نام تجاری آسیمکو از بهمن ماه ۱۳۹۱ فعالیت خود را در زمینه خدمات شبکه و فناوری اطلاعات آغاز نمود. این شرکت با هدف ارائه راهکارهای شبکه‌ای پیشرفته و ارتقای کیفیت خدمات فناوری اطلاعات، توانسته است طی سال‌ها جایگاه ویژه‌ای در بازار فناوری کشور به دست آورد.

                    تیم متخصص و مجرب آسیمکو با بیش از یک دهه تجربه، ارائه خدماتی جامع در حوزه شبکه‌های کامپیوتری، امنیت اطلاعات، نصب و راه‌اندازی تجهیزات شبکه و مدیریت سیستم‌های فناوری اطلاعات را تضمین می‌کند. این شرکت با تمرکز بر نیازهای سازمان‌ها و کسب‌وکارها، خدمات مشاوره‌ای تخصصی در زمینه طراحی و پیاده‌سازی شبکه‌های کامپیوتری، بهینه‌سازی سیستم‌های IT و ارتقای امنیت شبکه ارائه می‌دهد.

                    یکی از نقاط قوت آسیمکو، بهره‌گیری از کارشناسان حرفه‌ای و به‌روز در زمینه فناوری اطلاعات و شبکه است که توانسته‌اند پروژه‌های متعددی را در سازمان‌ها و شرکت‌های بزرگ با موفقیت اجرا کنند. علاوه بر این، آسیمکو همواره به دنبال نوآوری و به‌کارگیری تکنولوژی‌های مدرن شبکه و امنیت سایبری است تا بهترین خدمات را به مشتریان ارائه دهد.

                    با اعتماد به تجربه و تخصص تیم آسیمکو، سازمان‌ها و کسب‌وکارها می‌توانند از خدمات پشتیبانی شبکه، مدیریت سیستم‌های IT، امنیت اطلاعات و مشاوره فناوری اطلاعات بهره‌مند شوند و عملکرد خود را به سطح بالاتری ارتقا دهند. شرکت آسیمکو با رعایت استانداردهای بین‌المللی و توجه به نیازهای متغیر بازار، همواره در مسیر توسعه و ارائه راهکارهای شبکه‌ای مطمئن و به‌روز حرکت می‌کند.
                </p>
            </div>
        </section>

        <section>
            <div className="flex justify-between items-center my-12">
                <CyclicalCounter title="فروش‌های موفق" intervalSeconds={30} targetNumber={1289} countInterval={3} />
                <CyclicalCounter title="تعداد کاربران فعال" intervalSeconds={30} targetNumber={471} countInterval={3} />
                <CyclicalCounter title="پروژه‌های تکمیل‌شده" intervalSeconds={30} targetNumber={307} countInterval={3} />

            </div>
        </section>

        <section>
            <Divider orientation="left" orientationMargin={0} className="!font-bold">
                همکاران ما در آسیم
            </Divider>

            <TeamSection />
        </section>
    </div>
}

export default AboutUs;