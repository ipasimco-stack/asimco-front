import { useState } from "react";
import Image from "next/image";
import searchIcon from "../../../public/icons/search-orange-icon.png";

export const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
        console.log(e.target.value);
    };

    const handleSearchClick = () => {
        console.log("Search for:", searchValue);
    };

    return (
        <div className="flex justify-between items-center bg-[#f9f9f9] rounded-lg p-2 py-3">
            <input
                type="text"
                value={searchValue}
                onChange={handleChange}
                className="border-none border-l-1 border-[#05050524] border-solid outline-none placeholder:text-black placeholder:text-sm bg-transparent !w-[92%]"
                placeholder="جست‌وجو..."
            />
            <div className="w-[7%] cursor-pointer flex justify-center items-center">
                <Image
                    src={searchIcon}
                    className=""
                    width={25}
                    height={25}
                    alt="search icon / آیکون سرچ"
                    onClick={handleSearchClick}
                />
            </div>
        </div>
    );
};
