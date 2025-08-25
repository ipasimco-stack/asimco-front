import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

interface ProductGalleryProps {
  images: string[] | StaticImageData[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div>
      <div className="border rounded-xl overflow-hidden mb-4">
        <Image width={100} height={100} src={mainImage} alt="Product" className="w-full object-cover" />
      </div>
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <Image
            width={100}
            height={100}
            key={i}
            src={img}
            alt={`thumb-${i}`}
            className={`border rounded cursor-pointer ${mainImage === img ? "border-blue-500" : "border-gray-200"
              }`}
            onClick={() => setMainImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
