import PageTitle from "../Components/PageTitle";
import { useContext } from "react";
import CardShop from "../Components/Card";
import useMuebles from "../hooks/useMuebles";
import { Flex, Spinner, Wrap, WrapItem } from "@chakra-ui/react";
import CartContext from "../context/cart.context";

function CoursesShop() {
  const { muebles, isLoading } = useMuebles();
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  return (
    <Flex flexDir={"column"}>
      <PageTitle title="Acá podés ver todo lo que tengo para vender :)" />
      <Wrap spacing="30px" justify="center" align="center">
        {muebles.map((mueble) => (
          <WrapItem
            key={mueble.id}
            width={{ base: "100%", sm: "50vw", md: "33.33vw", lg: "30vw" }}
          >
            <CardShop mueble={mueble} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

export default CoursesShop;
