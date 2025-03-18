import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
export default function layout({ children }: Props) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      {children}
    </div>
  );
}
