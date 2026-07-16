import { useContext } from "react";
import { TreeContext } from "./TreeContext";

export function useTreeContext() {
  const context = useContext(TreeContext);
  if (!context) throw new Error("에러");
  return context;
}
