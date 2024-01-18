import { useEffect, useState } from "react";
import getArraySpanish from "../arrayFetching/ArraySpanish";

const useArrayMueblesDetail = (muebleDetail) => {
  const [muebleID, setMuebleID] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getArraySpanish()
      .then((data) => data.json())
      .then((data) =>
        setMuebleID(
          data.ArrayVentaMuebles.find(
            (muebleData) => muebleData.id === Number(muebleDetail)
          )
        )
      )
      .finally(() => setLoading(false));
  }, [muebleDetail]);

  return {
    mueble: muebleID,
    isLoading: loading,
  };
};

export default useArrayMueblesDetail;
