import { Flex, Heading, useToast, Button } from "@chakra-ui/react";
import CartDetail from "../Components/CartDetail";
import { useContext } from "react";
import CartContext from "../context/cart.context";

function Checkout() {
  const { cart } = useContext(CartContext);
  const toast = useToast();
  const checkOutToast = (toast) => {
    toast({
      title: "Redirección a Whatsapp",
      description:
        "Al hacer clink te va a redirigir a un link de whatsapp para que me escribas con la info de lo que querés llevar. Si el link por alguna razón no anda podés escribirme al 11 5149 9875 o al 11 3401 7983",
      status: "success",
      duration: 10000,
      isClosable: true,
      position: "center",
    });
  };

  if (cart.muebles.length === 0) return <div>El carrito está vacío</div>;

  return (
    <Flex flexDir={"column"} justifyContent={"space-between"} gap={5}>
      <Flex flexDir={"column"}>
        <Heading>Resumen del carrito</Heading>
        <CartDetail cart={cart} />
      </Flex>
      <Flex flexDir={"column"}>
        <Button
          as={"a"}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"purple.600"}
          onClick={() => checkOutToast(toast)}
          href={"https://wa.me/message/7F4BA5ADNVVRG1"}
          _hover={{
            bg: "purple.200",
            color: "purple.800",
          }}
        >
          ¡Listo!
        </Button>
      </Flex>
    </Flex>
  );
}

export default Checkout;
