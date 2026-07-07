import ModalLayout from "./ModalLayout";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

export default function Modal({ isOpen, handleClose }: Props) {
  return (
    isOpen && (
      <ModalLayout header={"모달 연습"} footer={"footer입니다."} handleClose={() => handleClose()}>
        <div>모달 내용</div>
      </ModalLayout>
    )
  );
}
