"use client";
import React from "react";
import { Card, Button, Tag } from "antd";
import { motion } from "framer-motion";
import { Cpu, HardDrive, MemoryStick } from "lucide-react";

interface ConfigItem {
  type: "cpu" | "ram" | "hard";
  name: string;
}

interface ConfigItem {
  type: "cpu" | "ram" | "hard";
  name: string;
}

export interface ProductConfigProps {
  title: string;
  image: string;
  items: ConfigItem[];
  originalPrice: number;
  discountPrice: number;
  key: number;
}

const icons = {
  cpu: <Cpu size={18} className="text-purple-500" />,
  ram: <MemoryStick size={18} className="text-green-500" />,
  hard: <HardDrive size={18} className="text-blue-500" />,
};

const ProductConfigCard: React.FC<ProductConfigProps> = ({
  title,
  image,
  items,
  originalPrice,
  discountPrice,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="w-full md:w-1/3"
    >
      <Card
        hoverable
        cover={
          <img
            alt={title}
            src={image}
            className="h-52 object-cover rounded-t-xl"
          />
        }
        className="rounded-xl shadow-lg bg-gradient-to-br from-purple-600 to-indigo-700 text-white"
      >
        <h2 className="text-xl font-bold mb-3">{title}</h2>

        <div className="space-y-2 mb-4">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {icons[item.type]}
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="line-through text-gray-300 text-sm">
              {originalPrice.toLocaleString()} تومان
            </p>
            <p className="text-lg font-bold text-purple-500">
              {discountPrice.toLocaleString()} تومان
            </p>
          </div>
          <Tag color="purple" className="text-base !m-0 font-semibold !px-3 !py-1">
            جشنواره
          </Tag>
        </div>
      </Card>
    </motion.div>
  );
};

export default ProductConfigCard;
