import {
  Button,
  Card,
  CardBody,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useToast,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import CartContext from "../context/cart.context";
import { useContext } from "react";

function CartDetail({ cart }) {
  const total = cart.muebles.reduce((acc, { mueble, quantity }) => {
    return acc + mueble.price * quantity;
  }, 0);
  const { removeItem, removeItemUnit, addItem, clear } =
    useContext(CartContext);
  const toast = useToast();
  return (
    <div>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th></Th>
              <Th> </Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {cart.muebles.map(({ mueble, quantity }) => (
              <Tr textAlign={"left"} key={mueble.id}>
                <Td>{mueble.title}</Td>
                <Td>
                  <Button
                    onClick={() => removeItemUnit(mueble.id)}
                    style={{ marginLeft: "7px" }}
                  >
                    -
                  </Button>
                  {quantity}
                  <Button
                    onClick={() => addItem(mueble, 1, toast)}
                    style={{ marginRight: "7px" }}
                  >
                    +
                  </Button>
                  <Button
                    onClick={() => removeItem(mueble.id)}
                    style={{ marginLeft: "7px" }}
                  >
                    <CloseIcon />
                  </Button>
                </Td>
                <Td isNumeric>U$D{mueble.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Card>
        <CardBody>
          <Text>Total Price: U$D{total}</Text>
        </CardBody>
      </Card>
      <Button onClick={() => clear()} style={{ marginLeft: "7px" }}>
        <CloseIcon /> Limpiar Carrito
      </Button>
    </div>
  );
}

export default CartDetail;
