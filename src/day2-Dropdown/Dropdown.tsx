import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const onClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Node && dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDropdownOpen]);

  return (
    <DropdownContainer ref={dropdownRef}>
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
