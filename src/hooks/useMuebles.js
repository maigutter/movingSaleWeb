import { useEffect } from "react";
import useIsLoading from "./useIsLoading";
import useArrayMuebles from "./useArrayMuebles";

export default function useMuebles() {
  const muebles = useArrayMuebles();
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    if (!muebles || muebles.length === 0) {
      console.log("Nothing is available yet");
      stopLoading();
      return;
    }

    stopLoading();
  }, [muebles, stopLoading]);

  return { muebles, isLoading };
}
