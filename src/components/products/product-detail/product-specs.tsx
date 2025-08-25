import React from "react";
import { Descriptions } from "antd";

interface Spec {
    key: string;
    value: string;
}

interface ProductSpecsProps {
    specs: Spec[];
}

const ProductSpecs: React.FC<ProductSpecsProps> = ({ specs }) => {
    return (
        <div className="bg-white shadow rounded-xl p-6 mt-8">
            <h2 className="text-lg font-bold mb-4">مشخصات فنی</h2>
            <Descriptions bordered column={1}>
                {specs.map((item, i) => (
                    <Descriptions.Item key={i} label={item.key}>
                        {item.value}
                    </Descriptions.Item>
                ))}
            </Descriptions>
        </div>
    );
};

export default ProductSpecs;
