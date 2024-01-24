export const getStatusColor = (status) => {
  switch (status) {
    case "Disponible":
      return "green.600"; // Green color
    case "Reservado":
      return "yellow.600"; // Mustard-yellow color
    case "Vendido":
      return "orange.600"; // Deep orange color
    default:
      return "yellow.800"; // Default to yellow for any other status
  }
};
