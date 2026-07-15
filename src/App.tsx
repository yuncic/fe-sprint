import { useState } from "react";
import Modal from "./day1-modal/Modal";
import Dropdown from "./day2-Dropdown/Dropdown";
import ToastProvider from "./day3-Toast/ToastProvider";
import { mockTree } from "./day4-Tree/mockData";
import TreeNode from "./day4-Tree/TreeNode";

function App() {
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());

  function onToggle(path: string) {
    const newSet = new Set(expandedPaths);
    if (newSet.has(path)) {
      newSet.has(path);
    } else {
      newSet.add(path);
    }
    setExpandedPaths(newSet);
  }
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
      <TreeNode node={mockTree} path={mockTree.name} extendedPaths={expandedPaths} onToggle={onToggle} />
    </>
  );
}

export default App;
