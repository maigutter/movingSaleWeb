const CategoryItem = ({ isActive = false, name }) => {
  const sayCategory = () => {
    console.log(`La categoría es: ${name}`);
  };

  return (
    <button
      type="button"
      onClick={sayCategory}
      className={`btn ${isActive ? "btn-primary" : "btn-link"}`}
    >
      {name}
    </button>
  );
};

export default CategoryItem;
