import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  //드롭다운 버튼
  const onClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // 드롭다운 영역 Ref로 잡기
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 드롭다운 바깥 영역 클릭 시 드롭다운 닫기
  useEffect(() => {
    if (!isDropdownOpen) return;

    const handleClick = (e: MouseEvent) => {
      if (e.target instanceof Node && dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [isDropdownOpen]);

  // esc 누를 시 드롭다운 닫기 / 화살표로 옵션 선택 / 엔터키로 확정
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsDropdownOpen(false);
      if (e.key == "ArrowDown") setHighlightIndex((prev) => Math.min(prev + 1, options.length - 1));
      if (e.key === "ArrowUp") setHighlightIndex((prev) => Math.max(prev - 1, 0));
      if (e.key === "Enter" && highlightIndex !== -1) {
        setSelectedValue(options[highlightIndex]);
        setIsDropdownOpen(false);
        setHighlightIndex(-1);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isDropdownOpen, highlightIndex]);

  const options = ["프론트", "백엔드", "안드로이드", "찰리"];

  return (
    <DropdownContainer ref={dropdownRef}>
      <button onClick={onClick}>{selectedValue ?? "우테코"}</button>
      {isDropdownOpen && (
        <ul>
          {options.map((option, index) => {
            return (
              <li key={index} style={{ background: index === highlightIndex ? "#ddd" : "transparent" }}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </DropdownContainer>
  );
}

const DropdownContainer = styled.div`
  width: 500px;
`;
