import { useState } from "react";
import ModalLayout from "./ModalLayout";

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    return setIsOpen(false);
  };
  return (
    isOpen && (
      <ModalLayout header={"모달 연습"} footer={"footer입니다."} handleClose={() => handleClose()}>
        <div>모달 내용</div>
      </ModalLayout>
    )
  );
}
