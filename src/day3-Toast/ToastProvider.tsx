import { useCallback, useState } from "react";
import { ToastContext, type ToastItem } from "./ToastContext";
import { createPortal } from "react-dom";
import ToastItemView from "./ToastItemView";
import "./toast.css";

export default function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = useCallback((message: string, type: ToastItem["type"]) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      {createPortal(
        <div className="toast-container">
          {toasts.map((toast) => {
            return <ToastItemView key={toast.id} toast={toast} onClose={removeToast} />;
          })}
        </div>,
        document.getElementById("toast")!,
      )}
    </ToastContext.Provider>
  );
}
