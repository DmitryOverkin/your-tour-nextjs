import React from "react";

interface IProps {
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className: string;
  children: React.ReactNode;
}

export default function SectionTitle({
  tag = "h2",
  className,
  children,
}: IProps) {
  const Tag = tag;
  return <Tag className={className}>{children}</Tag>;
}
