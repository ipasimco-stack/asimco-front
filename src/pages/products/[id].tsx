import ProductGallery from "@/components/products/product-detail/product-gallery";
import ProductInfo from "@/components/products/product-detail/product-info";
import ProductReviews from "@/components/products/product-detail/product-reviews";
import ProductSpecs from "@/components/products/product-detail/product-specs";
import RelatedProducts from "@/components/products/product-detail/related-products";
import React from "react";
import productImage from '../../../public/images/product-image.webp'

const ProductDetailsPage: React.FC = () => {
    const product = {
        id: 1,
        name: "محصول تستی",
        price: 350000,
        description: "این محصول نمونه‌ای برای تست می‌باشد",
        rating: 4,
        images: [
            productImage,
            productImage,
            productImage,
            productImage
        ],
        specs: [
            { key: "وزن", value: "1 کیلوگرم" },
            { key: "رنگ", value: "مشکی" },
            { key: "گارانتی", value: "12 ماه" },
        ],
    };

    const relatedProducts = [
        { id: 2, name: "محصول مرتبط 1", price: 200000, image: productImage },
        { id: 3, name: "محصول مرتبط 2", price: 150000, image: productImage },
        { id: 4, name: "محصول مرتبط 3", price: 400000, image: productImage },
    ];

    return (
        <div className="c_container mx-auto !mt-[200px] py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <ProductGallery images={product.images} />
                <ProductInfo
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    rating={product.rating}
                />
            </div>

            <ProductSpecs specs={product.specs} />

            <ProductReviews />

            <RelatedProducts products={relatedProducts} />
        </div>
    );
};

export default ProductDetailsPage;
