import { useRef } from "react";

export function useController<T>(factory: () => T): T {
  const ref = useRef<T>();
  if (!ref.current) {
    ref.current = factory();
  }
  return ref.current;
}