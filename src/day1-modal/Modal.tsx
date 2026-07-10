import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ModalContext } from "./ModalContext";
import useModalContext from "./useModalContext";
import ModalLayout from "./ModalLayout";
import { useToastContext } from "../day3-Toast/useToastContext";

function Root({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return <ModalContext.Provider value={{ isOpen, open, handleClose }}>{children}</ModalContext.Provider>;
}

function Trigger({ children }: { children: React.ReactNode }) {
  const { open } = useModalContext();
  const { addToast } = useToastContext();
  return (
    <button
      onClick={() => {
        open();
        addToast("모달이 열렸습니다!", "success");
      }}
    >
      {children}
    </button>
  );
}

interface ContentProps {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}

function Content({ header, footer, children }: ContentProps) {
  const { isOpen, handleClose } = useModalContext();
  if (!isOpen) return null;

  return createPortal(
    <ModalLayout header={header} footer={footer} handleClose={handleClose}>
      {children}
    </ModalLayout>,
    document.getElementById("modal-root")!,
  );
}

const Modal = { Root, Trigger, Content };
export default Modal;
