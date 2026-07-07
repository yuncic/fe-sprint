import { createPortal } from "react-dom";
import ModalLayout from "./ModalLayout";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ isOpen, handleClose }: Props) {
  if (!isOpen) return null;
  return createPortal(
    <ModalLayout header={"모달 연습"} footer={"footer입니다."} handleClose={() => handleClose()}>
      <div>모달 내용</div>
    </ModalLayout>,
    document.getElementById("modal-root")!,
  );
}
