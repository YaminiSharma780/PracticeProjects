import { useEffect, useState } from "react";

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const debounceHandler = setTimeout(() => {
    setDebouncedValue(value);
  }, delay);

  useEffect(() => {
    return () => {
      clearTimeout(debounceHandler);
    };
  }, [value, delay]);

  return debouncedValue;
}
