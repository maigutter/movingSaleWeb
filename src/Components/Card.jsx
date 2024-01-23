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

function CardShop({ mueble }) {
  const toast = useToast();
  const { cart, addItem, removeItem, removeItemUnit } = useContext(CartContext);
  const cartItem = cart.muebles.find((item) => item.mueble.id === mueble.id);

  return (
    <Card
      maxW="sm"
      justifyContent="center"
      align="center"
      minHeight="50vh"
      display="flex"
      flexDirection="column"
    >
      <CardBody justifyContent="center" align="center" flex="1">
        <Image
          height="250"
          src={mueble.picture}
          borderRadius="lg"
          justifyContent="center"
          align="center"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{mueble.title}</Heading>
          <Text size="md" fontWeight="550">
            {mueble.categoryName}
          </Text>
          <Text>{mueble.name}</Text>
          <Text size="md" fontWeight="550" as="mark">
            {mueble.status}
          </Text>
          {mueble.newPrice ? (
            <Stack direction="row" align="center">
              <Text
                color="gray.500"
                textDecoration="line-through"
                fontSize="2xl"
                fontWeight="semibold"
                justifyContent="center"
                align="center"
                marginTop="23%"
              >
                U$D{mueble.price}
              </Text>
              <Text
                color="green.500"
                fontSize="2xl"
                fontWeight="semibold"
                justifyContent="center"
                align="center"
                marginTop="23%"
              >
                U$D{mueble.newPrice}
              </Text>
            </Stack>
          ) : (
            <Text
              color="blue.600"
              fontSize="2xl"
              fontWeight="semibold"
              justifyContent="center"
              align="center"
              marginTop="23%"
              marginLeft="3%"
            >
              U$D{mueble.price}
            </Text>
          )}
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

export default CardShop;
