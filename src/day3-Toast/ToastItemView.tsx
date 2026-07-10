import { useEffect } from "react";
import type { ToastItem } from "./ToastContext";

interface Props {
  toast: ToastItem;
  onClose: (id: number) => void;
}

export default function ToastItemView({ toast, onClose }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(toast.id), 3000);
    return () => clearTimeout(timer);
  }, [toast.id, onClose]);
  return <div className={`toast toast--${toast.type}`}>{toast.message}</div>;
}
