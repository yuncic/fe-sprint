import { useEffect, useState } from "react";
import Modal from "./day1-modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = () => {
    return setIsOpen(true);
  };

  const onClose = () => {
    return setIsOpen(false);
  };

  useEffect(() => {
    const handleCloseModal = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleCloseModal);

    return () => window.removeEventListener("keydown", handleCloseModal);
  }, [onClose]);

  return (
    <div>
      <button onClick={() => modalOpen()}>모달 열기</button>
      <Modal isOpen={isOpen} handleClose={onClose} />
    </div>
  );
}

export default App;
