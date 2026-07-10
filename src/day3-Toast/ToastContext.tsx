import { createContext } from "react";

interface ToastContextType {
  id: number;
  type: "alert" | "success" | "error";
  message: string;
  time: number;
}

export const ToastContext = createContext<ToastContextType | null>(null);
