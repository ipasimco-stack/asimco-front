import React from "react";
import { Input, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const { Option } = Select;

interface TopFiltersProps {
  onSearch: (value: string) => void;
  onSortChange: (value: string) => void;
}

const TopFilters: React.FC<TopFiltersProps> = ({ onSearch, onSortChange }) => {
  return (
    <div className="w-full bg-white shadow rounded-xl p-4 mb-6 flex flex-col md:flex-row gap-4 items-center">
      <Input
        placeholder="جستجوی محصول..."
        prefix={<SearchOutlined />}
        className="w-full md:w-1/2"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Select
        defaultValue="latest"
        className="w-full md:w-1/4"
        onChange={onSortChange}
      >
        <Option value="latest">جدیدترین</Option>
        <Option value="priceLow">ارزان‌ترین</Option>
        <Option value="priceHigh">گران‌ترین</Option>
      </Select>
    </div>
  );
};

export default TopFilters;
