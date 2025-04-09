import { toast } from "react-hot-toast";

export function useToast() {
  return {
    toast, // إضافة خاصية `toast` هنا
    success: (message: string) => toast.success(message),
    error: (message: string) => toast.error(message),
    info: (message: string) => toast(message),
    variant: (message: string) => toast(message),

  };
}
