import React, { ReactNode } from "react";
import { ModalProvider } from "./ModalContext";

type ContextManagerProps = {
  children: ReactNode;
}

export const ContextManager = ({ children }: ContextManagerProps) => {
  return <>
    <ModalProvider>
      {children}
    </ModalProvider>
  </>;
};
