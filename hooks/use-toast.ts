import { useCallback } from "react";

export function useToast() {
  return {
    toast: useCallback(({ title, description }: { title: string; description?: string }) => {
      alert(`${title}\n${description ?? ''}`);
    }, []),
  };
}
