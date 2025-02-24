import { useEffect } from "react";
import useToastStore from "../store/toastStore";
import { cn } from "../lib/utils";

const ToastMessage = () => {
  const { isOpen, message, hideToast } = useToastStore();

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => hideToast(), 3000); // ✅ 3초 후 자동 닫힘
      return () => clearTimeout(timer);
    }
  }, [isOpen, hideToast]);

  if (!isOpen) return null;

  return (
    <div className={cn(
      "fixed top-5 left-1/2 transform -translate-x-1/2 p-4 rounded-md shadow-lg transition-all",
      "bg-gray-700 text-white"
    )}>
      {message}
    </div>
  );
};

export default ToastMessage;