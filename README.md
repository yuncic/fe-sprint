# fe-sprint

레벨3을 앞두고 진행하는 6일짜리 개인 프론트엔드 스프린트.

## 왜 하는가

레벨2를 마치고 레벨3에 들어가기 전, JS/TS 기본기·비동기·네트워크 지식이 약하다고 느껴서 커머스 도메인이나 서버 상태(TanStack Query) 없이 **UI 컴포넌트 설계 자체**(합성 패턴, props drilling 해결)에만 집중해 정면승부하는 챌린지.

## 무엇을 하는가

Modal/Dropdown/Toast 합성 컴포넌트와 재귀 트리 UI를 6일에 걸쳐 만든다.

| Day | 목표                                                                                                   | 정면승부 지점       |
| --- | ------------------------------------------------------------------------------------------------------ | ------------------- |
| 1   | Modal 기본형 — Portal, ESC/배경클릭 닫기, open/close 상태                                              | Portal 개념         |
| 2   | Modal → `Modal.Root/Trigger/Content` 합성 패턴 리팩토링 + Dropdown(외부클릭 감지, 키보드 ↑↓ Enter Esc) | 합성 컴포넌트 설계  |
| 3   | Toast — 큐로 여러 개 쌓기, `setTimeout` 자동 닫힘, cleanup                                             | 비동기/타이머       |
| 4   | 재귀 트리(파일 탐색기 UI) — props로 내려찍다가 아파지면 Context/custom hook으로 리팩토링               | props drilling 체감 |
| 5   | 전체 리팩토링 — Modal/Dropdown/Toast props 타입을 제네릭으로 재사용 가능하게 정리                      | Generic 재사용성    |
| 6   | 회고, 새 기능 추가 금지                                                                                | —                   |
