import { useState } from "react";
import CartContext from "./cart.context";

export default function CartProvider({ children }) {
  const [cart, setCart] = useState({
    muebles: [],
    total: 0,
  });

  const addItem = (mueble, quantity, toast) => {
    if (mueble.stock >= quantity) {
      const { muebles } = cart;
      const index = muebles.findIndex((i) => i.mueble.id === mueble.id);

      if (index > -1) {
        if (muebles[index].quantity + quantity <= mueble.stock) {
          toast({
            title: "Agregado al carrito!",
            description:
              "Tu producto ha sido agregado al carrito. No vas a poder comprar acá pero cuando termines va a haber un link a whatsapp :)",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
          muebles[index].quantity += quantity;
        } else {
          toast({
            title: "No disponible",
            description: "Solo hay una unidad de cada producto",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        }
      } else {
        muebles.push({
          mueble,
          quantity,
        });
      }

      setCart({
        ...cart,
        muebles,
        total: getTotal(muebles),
      });
    } else {
      toast({
        title: "No hay más unidades",
        description: "No hay más unidades, lo siento!",
        status: "warning",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const removeItem = (muebleID) => {
    const { muebles } = cart;
    const index = muebles.findIndex((item) => item.mueble.id === muebleID);

    if (index > -1) {
      muebles.splice(index, 1);
    }

    setCart({
      ...cart,
      muebles,
      total: getTotal(muebles),
    });
  };

  const removeItemUnit = (muebleID) => {
    const { muebles } = cart;
    const index = muebles.findIndex((item) => item.mueble.id === muebleID);

    if (index > -1) {
      if (muebles[index].quantity > 1) {
        muebles[index].quantity -= 1;
      } else {
        muebles.splice(index, 1);
      }
    }

    setCart({
      ...cart,
      muebles,
      total: getTotal(muebles),
    });
  };

  const clear = () => {
    setCart((prevValues) => ({
      ...prevValues,
      muebles: [],
      total: 0,
    }));
  };

  const getTotal = (muebles) => {
    return muebles.reduce(
      (acc, item) => acc + item.quantity * item.mueble.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        removeItemUnit,
        clear,
        getTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
