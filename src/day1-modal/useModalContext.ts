import { useContext } from "react";
import { ModalContext } from "./ModalContext";

export default function useModalContext() {
  const value = useContext(ModalContext);
  if (value === null) throw new Error("에러");
  return value;
}
