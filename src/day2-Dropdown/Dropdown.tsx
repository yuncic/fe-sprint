import { useState } from "react";
import styled from "styled-components";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const onClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <DropdownContainer>
      <button onClick={onClick}>우테코</button>
      {isDropdownOpen && (
        <ul>
          <li>프론트</li>
          <li>백엔드</li>
          <li>안드로이드</li>
          <li>찰리</li>
        </ul>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  width: 500px;
`;
