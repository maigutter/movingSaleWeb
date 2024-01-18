const CartItems = ({ count = 0 }) => {
  return (
    <span
      style={{
        width: "17px", // Fixed width
        height: "17px", // Fixed height
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "65%",
        color: "black",
        fontWeight: "bold",
        backgroundColor: "#c5a9e9", // Use the same color as defined in CSS
        borderRadius: "50%",
        padding: "5px", // Adjust padding as needed
        marginTop: "3px",
        position: "absolute",
        top: "-8px", // Adjust the position based on your preference
        right: "-8px", // Adjust the position based on your preference
        zIndex: "1", //
      }}
      className="brandColorPink"
    >
      {count}
    </span>
  );
};

export default CartItems;
