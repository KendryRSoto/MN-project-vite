import { toast } from "react-toastify";

export function Success(text) {
  toast.success(`${text}`, {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  return;
}
