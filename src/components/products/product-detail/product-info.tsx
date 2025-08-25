import React from "react";
import { Button, Rate } from "antd";

interface ProductInfoProps {
  name: string;
  price: number;
  description: string;
  rating: number;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
  name,
  price,
  description,
  rating,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">{name}</h1>
      <Rate disabled defaultValue={rating} />
      <p className="text-xl font-semibold text-green-600">
        {price.toLocaleString()} تومان
      </p>
      <p className="text-gray-600">{description}</p>
      <div className="flex gap-3 mt-4">
        <Button type="primary" size="large">
          افزودن به سبد خرید
        </Button>
        <Button size="large">افزودن به علاقه‌مندی‌ها</Button>
      </div>
    </div>
  );
};

export default ProductInfo;
