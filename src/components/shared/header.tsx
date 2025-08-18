'use client';
import { Divider, Dropdown } from "antd"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchInput } from "./search-input";
import Button from "./button";

export const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = [
        { name: "انواع CPU", items: ["Intel i9", "Intel i7", "AMD Ryzen 9", "AMD Ryzen 7"] },
        { name: "انواع RAM", items: ["DDR4 16GB", "DDR4 32GB", "DDR5 64GB"] },
        { name: "انواع Hard", items: ["SSD NVMe", "HDD 2TB", "Enterprise SSD"] },
        { name: "انواع Server", items: ["Server G10", "Server G9", "Server G8"] },
    ];

    const [pages, setPages] = useState([
        { title: "استعلام قیمت", route: "/" },
        { title: "مقالات", route: "/" },
        { title: "نمایندگان کارا شبکه آسیم", route: "/" },
        { title: "تماس با ما", route: "/" },
        { title: "درباره ما", route: "/" }
    ])

    return <header className="header shadow-header">
        <div className="">
            <div className="c_container flex justify-between items-center ">
                <div>
                    <Link href={"/"}>
                        <Image
                            src={'https://asimco.ir/wp-content/uploads/2020/02/asimco-logo12.png'}
                            width={100}
                            height={90}
                            alt="logo asim / لوگو کارا شبکه آسیم" />
                    </Link>
                </div>
                <div className="w-[50%]">
                    <SearchInput />
                </div>
                <div className="flex items-center gap-3">
                    <Button >
                        خرید سرور hp
                    </Button>

                    <Button variant="outline">
                        مشاوره
                    </Button>
                </div>
            </div>
            <Divider />
        </div>
        <div>
            <div className="pt-4">
                <div className="c_container">
                    <ul className="flex items-center gap-10">
                        <li>
                            <Dropdown
                                placement="bottomLeft"
                                trigger={["click"]}
                                dropdownRender={() => (
                                    <div className="bg-white shadow-xl rounded-xl p-4 w-[600px] flex">
                                        <div className="w-1/3 border-r">
                                            {categories.map((cat) => (
                                                <div
                                                    key={cat.name}
                                                    onMouseEnter={() => setSelectedCategory(cat.name)}
                                                    className={`p-2 cursor-pointer hover:bg-gray-100 ${selectedCategory === cat.name ? "font-bold text-blue-600" : ""
                                                        }`}
                                                >
                                                    {cat.name}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="w-2/3 pl-4">
                                            {selectedCategory ? (
                                                <ul className="grid grid-cols-2 gap-2">
                                                    {categories
                                                        .find((c) => c.name === selectedCategory)
                                                        ?.items.map((item) => (
                                                            <li
                                                                key={item}
                                                                className="p-2 cursor-pointer hover:bg-gray-100 rounded"
                                                            >
                                                                {item}
                                                            </li>
                                                        ))}
                                                </ul>
                                            ) : (
                                                <div className="text-gray-400 flex items-center justify-center h-full">
                                                    یک دسته‌بندی انتخاب کنید
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            >
                                <div className="cursor-pointer">
                                    محصولات
                                </div>
                            </Dropdown>
                        </li>
                        {
                            pages.map((page) => {
                                return <li>
                                    <Link href={page.route}>
                                        {page.title}
                                    </Link>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    </header >
}