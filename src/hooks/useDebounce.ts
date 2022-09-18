import { useState, useEffect } from "react";

const useDebounce = () => {
  const [value, setValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [value, 500]);
  return { debouncedValue, value, setValue };
};

export default useDebounce;
