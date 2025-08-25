import React from "react";
import { Card, Pagination } from "antd";
import Link from "next/link";
import Image from "next/image";

const { Meta } = Card;

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface ProductGridProps {
  products: Product[];
  total: number;
  currentPage: number;
  pageSize: number;
  onPageChange: (page: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  total,
  currentPage,
  pageSize,
  onPageChange,
}) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link href={`/products/${product.id}`} key={`/products/${product.id}`}>
            <Card
              key={product.id}
              hoverable
              cover={<Image width={100} height={100} alt={product.name} src={product.image} />}
              className="rounded-xl shadow"
            >
              <Meta
                title={product.name}
                description={`${product.price.toLocaleString()} تومان`}
              />
            </Card>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={onPageChange}
        />
      </div>
    </>
  );
};

export default ProductGrid;
