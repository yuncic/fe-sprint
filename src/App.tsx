import Modal from "./day1-modal/Modal";
import Dropdown from "./day2-Dropdown/Dropdown";
import ToastProvider from "./day3-Toast/ToastProvider";
import { mockTree } from "./day4-Tree/mockData";
import TreeNode from "./day4-Tree/TreeNode";
import TreeProvider from "./day4-Tree/TreeProvider";

function App() {
  return (
    <>
      <ToastProvider>
        <Modal.Root>
          <Modal.Trigger>모달 열기</Modal.Trigger>
          <Modal.Content header={"모달 입니다."} footer={"footer입니다."}>
            모달 내용
          </Modal.Content>
        </Modal.Root>
        <Dropdown />
      </ToastProvider>
      <TreeProvider>
        <TreeNode node={mockTree} path={mockTree.name} />
      </TreeProvider>
    </>
  );
}

export default App;
