import { useCallback } from "react";

export function useToast() {
  return {
    toast: useCallback(({ title, description }) => {
      alert(`${title}\n${description ?? ''}`);
    }, []),
  };
}
