import { useContext } from "react";
import CartIcon from "./CartIcon";
import CartItems from "./CartItems";
import CartContext from "../../../context/cart.context";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="divCart" style={{ cursor: "pointer" }}>
      <CartIcon color="black" />
      <CartItems
        count={cart.muebles.reduce((acc, curr) => acc + curr.quantity, 0)}
      />
    </div>
  );
};

export default CartWidget;
