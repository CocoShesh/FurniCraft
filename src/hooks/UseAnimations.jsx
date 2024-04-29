import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useAOS = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return null; // Since this hook is only for initialization, it doesn't return anything
};

export default useAOS;
