import { useEffect, useState } from "react";
import useIsLoading from "./useIsLoading";
import useArrayMueblesDetail from "./useArrayMueblesDetail";

export default function useMuebleById(id) {
  const [mueble, setMueble] = useState(null);
  const { stopLoading, isLoading } = useIsLoading();
  const { muebleID } = useArrayMueblesDetail(id);

  useEffect(() => {
    if (!isLoading) {
      if (muebleID) {
        const foundMueble = muebleID && muebleID.id === Number(id);
        if (foundMueble) {
          setMueble(foundMueble);
        } else {
          console.error("Lo que estás buscando no existe.");
        }
      }
      stopLoading();
    }
  }, [isLoading, muebleID, stopLoading, id]);

  return { mueble, isLoading };
}
