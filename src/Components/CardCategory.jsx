import { Link } from "react-router-dom";
import {
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  CardBody,
  CardFooter,
  useToast,
} from "@chakra-ui/react";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import { CloseIcon } from "@chakra-ui/icons";

function CardCategory({ mueble }) {
  const toast = useToast();
  const { cart, addItem, removeItem, removeItemUnit } = useContext(CartContext);
  const cartItem = cart.muebles.find((item) => item.mueble.id === mueble.id);

  return (
    <Card maxW="sm" justifyContent="center" align="center">
      <CardBody justifyContent="center" align="center">
        <Image
          height="250"
          src={`/./${mueble.picture}`}
          borderRadius="lg"
          justifyContent="center"
          align="center"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{mueble.title}</Heading>
          <Text>{mueble.name}</Text>
          <Text size="md" fontWeight="550">
            {mueble.status}
          </Text>
          <Text color="blue.600" fontSize="2xl">
            U$D{mueble.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        {cartItem ? (
          <ButtonGroup spacing="2">
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={() => removeItemUnit(mueble.id)}
            >
              -
            </Button>
            <Text>{cartItem.quantity}</Text>
            <Button
              variant="outline"
              colorScheme="blue"
              onClick={() => addItem(mueble, 1, toast)}
            >
              +
            </Button>
            <Button
              onClick={() => removeItem(mueble.id)}
              style={{ marginLeft: "7px" }}
            >
              <CloseIcon />
            </Button>
            <Link to={`/coursesShop/${mueble.id}`}>Más información</Link>
          </ButtonGroup>
        ) : (
          <ButtonGroup spacing="2">
            <Button variant="solid" bg="purple.800" color="purple.50">
              <Link to={`/coursesShop/${mueble.id}`}>Más información</Link>{" "}
            </Button>
            <Button
              variant="solid"
              bg="purple.500"
              color="purple.50"
              onClick={() => addItem(mueble, 1, toast)}
            >
              ¡Lo quiero!
            </Button>
          </ButtonGroup>
        )}
      </CardFooter>
    </Card>
  );
}

export default CardCategory;
