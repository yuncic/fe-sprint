import { createContext } from "react";

interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  handleClose: () => void;
}

export const ModalContext = createContext<ModalContextType | null>(null);
