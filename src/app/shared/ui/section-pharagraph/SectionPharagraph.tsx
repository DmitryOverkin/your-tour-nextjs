interface IProps {
  className: string;
  children: React.ReactNode;
}

export default function SectionPharagraph({className, children}: IProps) {
  return <p className={className}>{children}</p>;
}
