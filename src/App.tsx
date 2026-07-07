import { useState } from "react";
import Modal from "./day1-modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const modalOpen = () => {
    return setIsOpen(true);
  };
  const handleClose = () => {
    return setIsOpen(false);
  };
  return (
    <div>
      <button onClick={() => modalOpen()}>모달 열기</button>
      <Modal isOpen={isOpen} handleClose={handleClose} />
    </div>
  );
}

export default App;
