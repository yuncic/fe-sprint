import Modal from "./day1-modal/Modal";

function App() {
  return (
    <Modal.Root>
      <Modal.Trigger>모달 열기</Modal.Trigger>
      <Modal.Content header={"모달 입니다."} footer={"footer입니다."}>
        모달 내용
      </Modal.Content>
    </Modal.Root>
  );
}

export default App;
