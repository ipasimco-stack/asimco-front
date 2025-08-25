import FilterSidebar from "@/components/products/filter-sidebar";
import ProductGrid from "@/components/products/product-grid";
import TopFilters from "@/components/products/top-filters";
import React, { useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    image: string;
}

const mockProducts: Product[] = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `محصول ${i + 1}`,
    price: Math.floor(Math.random() * 500000) + 50000,
    category: i % 2 === 0 ? "دسته ۱" : "دسته ۲",
    image: "https://dobrka.com/2861-home_default/%D8%B3%D8%B1%D9%88%D8%B1-hpe-proliant-dl145-gen11.webp",
}));

const ProductsPage: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 9;

    const handleSearch = (value: string) => console.log("Search:", value);
    const handleSortChange = (value: string) => console.log("Sort:", value);
    const handleCategoryChange = (value: string) => console.log("Category:", value);
    const handlePriceChange = (value: [number, number]) => console.log("Price:", value);

    const currentProducts = mockProducts.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    return (
        <div className="c_container mx-auto !mt-[200px] py-10">
            <TopFilters onSearch={handleSearch} onSortChange={handleSortChange} />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6" dir="ltr">
                <div className="md:col-span-3">
                    <ProductGrid
                        products={currentProducts}
                        total={mockProducts.length}
                        currentPage={currentPage}
                        pageSize={pageSize}
                        onPageChange={setCurrentPage}
                    />
                </div>

                <FilterSidebar
                    onCategoryChange={handleCategoryChange}
                    onPriceChange={handlePriceChange}
                />
            </div>
        </div>
    );
};

export default ProductsPage;
