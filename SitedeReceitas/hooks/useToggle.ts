import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  function toggle() {
    setValue((prev) => !prev);
  }

  return { value, toggle };
}
