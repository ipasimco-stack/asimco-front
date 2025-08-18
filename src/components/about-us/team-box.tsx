// components/TeamSection.tsx
import React from "react";
import { Card } from "antd";
import boyProfile from "../../../public/images/l6ad_u71g_230710.jpg"
import girlProfile from "../../../public/images/girl-user-profile.jpg"
import Image, { StaticImageData } from "next/image";

interface TeamMember {
    name: string;
    role: string;
    image: StaticImageData;
}

const teamMembers: TeamMember[] = [
    {
        name: "خلیل بابایی",
        role: "مدیرعامل",
        image: boyProfile,
    },
    {
        name: "هانیه امانی",
        role: "کارشناس فروش",
        image: girlProfile,
    },
    {
        name: "مارال کوشکی",
        role: "کارشناس فروش",
        image: girlProfile,
    },
    {
        name: "هانیه جعفری",
        role: "حسابدار مالی",
        image: girlProfile,
    },
    {
        name: "نیما تاجیک",
        role: "برنامه‌نویس",
        image: boyProfile,
    },
];

const TeamSection: React.FC = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {teamMembers.map((member, idx) => (
                        <Card
                            key={idx}
                            hoverable
                            className="text-center p-4 flex flex-col gap-2 shadow-lg rounded-xl"
                            cover={
                                <Image
                                    alt={member.name}
                                    src={member.image}
                                    className="!w-full !h-[90px]"
                                    width={20}
                                    height={20}
                                />
                            }
                        >
                            <h3 className="text-[16px] !font-bold">{member.name}</h3>
                            <p className="text-gray-500 text-[13px]">{member.role}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
