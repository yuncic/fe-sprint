// 트리거: 임의의 컴포넌트에서 "토스트 띄워줘" 하면 뜬다 (에러 메시지, 유효성 실패 등 — 내용은 호출하는 쪽이 결정)
// 다중 표시: 여러 개 동시에 쌓일 수 있음. 순서대로 화면에 리스트로 보임
// 자동 소멸: 각 토스트는 뜬 시점 기준 3초 후 자동으로 사라짐. 토스트마다 독립적인 타이머 — 하나가 사라진다고 다른 거 타이머가 영향받으면 안 됨
// cleanup: 컴포넌트가 언마운트되거나 토스트가 먼저 수동으로 닫히면, 돌고 있던 setTimeout도 같이 정리돼야 함 (안 하면 언마운트된 컴포넌트 상태 업데이트 시도하는 문제 생김)

import { useState } from "react";
import { createPortal } from "react-dom";

export default function Toast() {
  const [activeToast, setActiveToast] = useState([]);
  if (activeToast.length === 0) return;
  const pullUpToast = () => {};

  return createPortal(<div>Toast</div>, document.getElementById("toast")!);
}
