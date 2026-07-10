import { createContext } from "react";

export interface ToastItem {
  id: number;
  type: "alert" | "success" | "error";
  message: string;
}

interface ToastContextType {
  addToast: (message: string, type: ToastItem["type"]) => void;
}

export const ToastContext = createContext<ToastContextType | null>(null);
