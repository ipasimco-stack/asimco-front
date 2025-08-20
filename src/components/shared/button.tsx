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
        "px-6 !w-max !text-sm py-3 rounded-md font-medium transition-colors duration-200",
        variant === "solid" &&
          "bg-purple-500 !text-white hover:bg-purple-600 active:bg-purple-700",
        variant === "outline" &&
          "border-2 !text-purple-500 border-purple-500 text-purple-500 hover:bg-purple-50 active:bg-purple-100",
        className
      )}
    >
      {children}
    </button>
  );
}
