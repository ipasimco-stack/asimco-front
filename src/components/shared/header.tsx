'use client';
import { Divider, Dropdown } from "antd"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SearchInput } from "./search-input";
import Button from "./button";
import { v4 as uuidv4 } from 'uuid';
import arrow_down from "../../../public/images/down-arrow.png";


export const Header = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = [
        { name: "انواع CPU", items: ["Intel i9", "Intel i7", "AMD Ryzen 9", "AMD Ryzen 7", "AMD Ryzen 9", "AMD Ryzen 7", "AMD Ryzen 7", "AMD Ryzen 9", "AMD Ryzen 7"] },
        { name: "انواع RAM", items: ["DDR4 16GB", "DDR4 32GB", "DDR5 64GB", "DDR4 16GB", "DDR4 32GB", "DDR5 64GB", "DDR4 32GB", "DDR5 64GB", "DDR4 16GB", "DDR4 32GB", "DDR5 64GB"] },
        { name: "انواع Hard", items: ["SSD NVMe", "HDD 2TB", "Enterprise SSD", "SSD NVMe", "HDD 2TB", "Enterprise SSD", "Enterprise SSD", "SSD NVMe", "HDD 2TB", "Enterprise SSD"] },
        { name: "انواع Server", items: ["Server G10", "Server G9", "Server G8", "Server G10", "Server G9", "Server G8", "Server G8", "Server G10", "Server G9", "Server G8"] },
    ];

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [pages, setPages] = useState([
        { title: "استعلام قیمت", route: "/price-inquiry" },
        { title: "نمایندگان کارا شبکه آسیم", route: "/representatives" },
        { title: "تماس با ما", route: "/contact-us" },
        { title: "درباره ما", route: "/about-us" }
    ])

    return <header className="header shadow-header fixed w-full top-0 z-[99999] bg-white" style={{ boxShadow: "rgb(0 0 0 / 13%) 0px 2px 20px 0px" }}>
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
                        <Link href={'/auth'}>
                            ورود / ثبت نام
                        </Link>
                    </Button>

                    <Button variant="outline">
                        <Link href={"/consultation"}>
                            مشاوره
                        </Link>
                    </Button>
                </div>
            </div>
            <Divider />
        </div>
        <div>
            <div className="pt-4 pb-5">
                <div className="c_container">
                    <div className="flex justify-between items-center">
                        <ul className="flex items-center gap-10">
                            <li>
                                <Link href={"/"}>
                                    صفحه اصلی
                                </Link>
                            </li>
                            <li>
                                <Dropdown
                                    placement="bottomLeft"
                                    trigger={["click"]}
                                    onOpenChange={(open) => {
                                        if (!open) setSelectedCategory(null);
                                    }}
                                    dropdownRender={() => (
                                        <div className="bg-white rounded-xl p-4 w-[800px] mt-8 flex" style={{ boxShadow: "0 0 20px 0px #efefef" }}>
                                            <div className="w-1/3 border-l-1 flex flex-col gap-2 border-[#0505050f]">
                                                {categories.map((cat, i) => (
                                                    <>
                                                        <div
                                                            key={`${cat.name}-${i + 1}`}
                                                            onMouseEnter={() => setSelectedCategory(cat.name)}
                                                            className={`p-2 cursor-pointer hover:bg-gray-100 ${selectedCategory === cat.name ? "font-bold bg-gray-100 text-blue-600" : ""
                                                                }`}
                                                        >
                                                            {cat.name}
                                                        </div>
                                                    </>
                                                ))}

                                                <div className={`${!selectedCategory && 'p-2 cursor-pointer hover:bg-gray-100 font-bold bg-gray-100 text-blue-600'}`}>
                                                    <Link href={"products"} >
                                                        همه محصولات
                                                    </Link>
                                                </div>
                                            </div>

                                            <div className="w-2/3 pr-4">
                                                {selectedCategory ? (
                                                    <ul className="grid grid-cols-3 gap-2">
                                                        {categories
                                                            .find((c) => c.name === selectedCategory)
                                                            ?.items.map((item) => (
                                                                <li
                                                                    key={`${selectedCategory}-${item}-${uuidv4()}`}
                                                                    className="p-2 cursor-pointer text-center hover:bg-gray-100 rounded"
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
                                    <div className="cursor-pointer flex items-center gap-1 flex-row-reverse">
                                        <Image src={arrow_down} alt="arrow_down" width={10} height={10} className="mr-[2px]" />
                                        <p>محصولات</p>
                                    </div>
                                </Dropdown>
                            </li>
                            {
                                pages.map((page, i) => {
                                    return <li key={page.title + i}>
                                        <Link href={page.route}>
                                            {page.title}
                                        </Link>
                                    </li>
                                })
                            }
                        </ul>
                        <div>
                            <p>021-22889922</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header >
}