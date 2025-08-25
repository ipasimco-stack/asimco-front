import React from "react";
import { Select} from "antd";

const { Option } = Select;

interface FilterSidebarProps {
  onCategoryChange: (value: string) => void;
  onPriceChange: (value: [number, number]) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  onCategoryChange,
}) => {
  return (
    <div className="bg-white shadow rounded-xl p-4 flex flex-col gap-6">
      <div>
        <h3 className="font-bold mb-2">فیلتر دسته‌بندی</h3>
        <Select className="w-full" allowClear onChange={onCategoryChange}>
          <Option value="دسته ۱">دسته ۱</Option>
          <Option value="دسته ۲">دسته ۲</Option>
          <Option value="دسته ۳">دسته ۳</Option>
        </Select>
      </div>
    </div>
  );
};

export default FilterSidebar;
