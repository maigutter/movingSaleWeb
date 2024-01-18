import { useEffect, useState } from "react";
import getArraySpanish from "../arrayFetching/ArraySpanish";

const useArrayMuebles = () => {
  const [muebles, setMuebles] = useState([]);

  useEffect(() => {
    getArraySpanish()
      .then((data) => data.json())
      .then((data) => {
        console.log("console the array");
        console.log(data.ArrayVentaMuebles);
        setMuebles(data.ArrayVentaMuebles);
      });
  }, []);

  return muebles;
};

export default useArrayMuebles;
