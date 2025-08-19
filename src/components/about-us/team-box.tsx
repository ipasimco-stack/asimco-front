// components/TeamSection.tsx
import React from "react";
import { Card } from "antd";
import UserProfile from "../../../public/images/user-profile.gif"

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
        image: UserProfile,
    },
    {
        name: "هانیه امانی",
        role: "کارشناس فروش",
        image: UserProfile,
    },
    {
        name: "مارال کوشکی",
        role: "کارشناس فروش",
        image: UserProfile,
    },
    {
        name: "هانیه جعفری",
        role: "حسابدار مالی",
        image: UserProfile,
    },
    {
        name: "نیما تاجیک",
        role: "برنامه‌نویس",
        image: UserProfile,
    },
];

const TeamSection: React.FC = () => {
    return (
        <section className="py-16">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {teamMembers.map((member, idx) => (
                        <Card
                            key={idx}
                            hoverable
                            className="text-center p-4 flex items-center justify-center flex-col shadow-lg rounded-xl"
                            cover={
                                <Image
                                    alt={member.name}
                                    src={member.image}
                                    className="!w-[60px] !h-[60px] mt-5"
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
