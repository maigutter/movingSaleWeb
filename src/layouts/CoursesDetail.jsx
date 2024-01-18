import ItemListContainer from "../Components/ItemListContainer";
import { useParams } from "react-router-dom";
import CardShopDetail from "../Components/CardDetail";
import useArrayMueblesDetail from "../hooks/useArrayMueblesDetail";
import { Flex, Spinner } from "@chakra-ui/react";

function CoursesDetail() {
  const params = useParams();
  const { mueble, isLoading } = useArrayMueblesDetail(params.muebleDetail);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  if (!mueble) {
    return <h3>Lo que estás buscando no existe</h3>;
  }

  return (
    <Flex flexDir={"column"}>
      <ItemListContainer greeting="Acá podés encontrar más detalles" />
      <CardShopDetail mueble={mueble} />
    </Flex>
  );
}

export default CoursesDetail;
