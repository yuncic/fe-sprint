import { createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  handleClose: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
