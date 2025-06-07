import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  classname?: string;
}
export const ContainerWrapper: React.FC<ContainerProps> = ({
  children,
  style,
  classname,
}) => {
  return (
    <div className={`container-wrap ${classname || ""}`} style={style}>
      {children}
    </div>
  );
};
