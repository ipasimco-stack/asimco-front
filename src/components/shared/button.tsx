import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "solid" | "outline";
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export default function Button({
  variant = "solid",
  children,
  onClick,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-6 !w-max !text-sm py-2 rounded-md font-medium transition-colors duration-200",
        variant === "solid" &&
          "bg-orange-500 !text-white hover:bg-orange-600 active:bg-orange-700",
        variant === "outline" &&
          "border-2 !text-orange-500 border-orange-500 text-orange-500 hover:bg-orange-50 active:bg-orange-100",
        className
      )}
    >
      {children}
    </button>
  );
}
