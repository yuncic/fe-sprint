import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

interface Props<T> {
  options: T[];
  onSelect?: (option: T) => void;
  getLabel?: (option: T) => string;
}

export default function Dropdown<T>({ options, onSelect, getLabel = (option) => String(option) }: Props<T>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const [selectedValue, setSelectedValue] = useState<T | null>(null);
  const selectOption = (option: T) => {
    setSelectedValue(option);
    onSelect?.(option);
    setIsDropdownOpen(false);
    setHighlightIndex(-1);
  };

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
        selectOption(options[highlightIndex]);
      }
    };
    document.addEventListener("keydown", handleKeydown);
    return () => document.removeEventListener("keydown", handleKeydown);
  }, [isDropdownOpen, highlightIndex]);

  return (
    <DropdownContainer ref={dropdownRef}>
      <button onClick={onClick}>{selectedValue !== null ? getLabel(selectedValue) : "우테코"}</button>
      {isDropdownOpen && (
        <ul>
          {options.map((option, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  selectOption(option);
                }}
                style={{ background: index === highlightIndex ? "#ddd" : "transparent" }}
              >
                {getLabel(option)}
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
