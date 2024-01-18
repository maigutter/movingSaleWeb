import { useEffect, useState } from "react";
import useIsLoading from "./useIsLoading";
import useArrayMuebles from "./useArrayMuebles";

export default function useMueblesByCategory(category) {
  const muebles = useArrayMuebles();
  const [filteredMuebles, setFilteredMuebles] = useState([]);
  const { stopLoading, isLoading } = useIsLoading();

  useEffect(() => {
    if (!muebles || muebles.length === 0) {
      stopLoading();
      return;
    }

    console.log("Category parameter received:", category);

    const filteredMuebles = muebles.filter(
      (mueble) => mueble.category === category && mueble.stock > 0
    );
    console.log("Filtered Muebles:", filteredMuebles);

    setFilteredMuebles(filteredMuebles);

    stopLoading();
  }, [category, muebles, stopLoading]);
  return { filteredMuebles, isLoading };
}
