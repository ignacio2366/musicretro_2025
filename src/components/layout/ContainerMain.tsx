import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  style?: string;
  classname?: string;
}
export const ContainerMain: React.FC<ContainerProps> = ({
  children,
  classname,
}) => {
  return <div className={`container-main ${classname || ""}`}>{children}</div>;
};
