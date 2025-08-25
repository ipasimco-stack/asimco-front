import React from "react";
import { Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface RelatedProductsProps {
    products: Product[];
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products }) => {
    return (
        <div className="mt-10">
            <h2 className="text-lg font-bold mb-4">محصولات مرتبط</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <Card
                        key={product.id}
                        hoverable
                        cover={<Image width={100} height={100} alt={product.name} src={product.image} />}
                    >
                        <Meta title={product.name} description={`${product.price.toLocaleString()} تومان`} />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default RelatedProducts;
