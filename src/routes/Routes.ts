interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  link?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    link: "/",
    label: "Inicio",
  },
  {
    link: "/coursesShop",
    label: "Shop",
  },
  {
    label: "Categorías",
    children: [
      {
        label: "Muebles de madera",
        link: "/category/mueblesDeMadera",
      },
      {
        label: "Otros",
        link: "/category/otros",
      },
      {
        label: "Otros Muebles",
        link: "/category/otrosMuebles",
      },

      {
        label: "Electrodomésticos",
        link: "/category/electrodomesticos",
      },
    ],
  },
  {
    link: "/#FAQ",
    label: "FAQ - Preguntas Frecuentes",
  },
  {
    link: "/english",
    label: "English",
  },
];

export default NAV_ITEMS;
