import { useParams } from "react-router-dom";
import useMueblesByCategory from "../hooks/useMueblesByCategory";
import CardCategory from "../Components/CardCategory";
import { Flex, Heading, Wrap, WrapItem, Spinner } from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../context/cart.context";

const ROUTES = [
  {
    link: "/category/mueblesDeMadera",
    label: "Muebles de madera",
  },
  {
    link: "/category/otros",
    label: "Otros",
  },
  {
    link: "/category/otrosMuebles",
    label: "Otros Muebles",
  },
  {
    link: "/category/electrodomesticos",
    label: "Electrodomésticos",
  },
];
function Category() {
  const { category } = useParams();
  const { filteredMuebles, isLoading } = useMueblesByCategory(category);
  const { addItem } = useContext(CartContext);

  if (isLoading) {
    return <Spinner color="purple.600" />;
  }

  const categoryItem = ROUTES.find(
    (item) => item.link === `/category/${category}`
  );

  if (filteredMuebles.length === 0)
    return <div>No hay productos disponibles con la categoría: {category}</div>;

  const categoryLabel = categoryItem.label;
  return (
    <Flex flexDir={"column"} gap="3">
      <Heading>{categoryLabel}</Heading>
      <Wrap spacing={"30px"}>
        {filteredMuebles.map((mueble) => (
          <WrapItem key={mueble.id}>
            <CardCategory mueble={mueble} handleClick={addItem} />
          </WrapItem>
        ))}
      </Wrap>
    </Flex>
  );
}

export default Category;
