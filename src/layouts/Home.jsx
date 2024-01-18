import PageTitle from "../Components/PageTitle";
import {
  Button,
  Card,
  CardBody,
  Text,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import brandImage from "../assets/logo.png";

function Home() {
  return (
    <>
      <div className="center">
        <Image borderRadius="full" boxSize="150px" src={brandImage} />
        <PageTitle title="¡Hola!" />
        <Card
          align="center"
          justify="center"
          variant="elevated"
          width="85%"
          margin="5vh"
          bg="#FAF5FF"
          color="#44337A"
        >
          <CardBody>
            <Text align="center" fontWeight="500" fontsize="xl">
              {" "}
              ¡Hola! Me llamo Mai. <br />
              Me estoy mudando a otro país así que así que estoy vendiendo
              muchas cositas, casi todos mis muebles y electrodomésticos que
              compré y cuidé con mucho amor en los últimos 3 años.{" "}
            </Text>
          </CardBody>
        </Card>
      </div>
      <div className="center">
        <Button colorScheme="purple" size="lg">
          <Link to={"/coursesShop"}> Ir a ver todo</Link>
        </Button>
      </div>
      <div className="center" id="FAQ">
        <Accordion defaultIndex={[0]} allowMultiple width="85%" margin="5vh">
          <Heading
            bg="#FAF5FF"
            color="#44337A"
            fontWeight="550"
            size="md"
            margin="2vh"
            justifyContent="center"
            align="center"
          >
            {" "}
            FAQ - Preguntas Frecuentes{" "}
          </Heading>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#44337A"
                color="white"
                fontWeight="550"
                _expanded={{ bg: "#D6BCFA", color: "black" }}
                _hover={{ bg: "#F7FAFC", color: "#805AD5" }}
              >
                <Box as="span" flex="1" textAlign="left">
                  ¿Cómo te contacto?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Hay un botón arriba a la derecha en la barra de navegación que
              dice Contactame. Si clickeas ahí te va a redireccionar
              directamente a un link para mandarme un whatsapp. Si por alguna
              razón el botón no te anda (o si querés agendarte mi número y
              mensajearme más tarde), te lo dejo acá también. (+549)11 3401
              7983. Por favor contactame por Whatsapp (no vía llamada o SMS).
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#44337A"
                color="white"
                fontWeight="550"
                _expanded={{ bg: "#D6BCFA", color: "black" }}
                _hover={{ bg: "#F7FAFC", color: "#805AD5" }}
              >
                <Box as="span" flex="1" textAlign="left">
                  ¿Por dónde se retira? ¿Haces entregas?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Todo se retira por Belgrano/Colegiales -a una cuadra de Moldes y
              Virrey del Pino, 4 cuadras de la estación José Hernandez de la
              línea D-. En este momento no ofrezco yo el servicio de
              entrega/flete pero si querés podés mandar tu flete o servicio de
              retiro de confianza. Los días y horarios para retirar son a
              coordinar. ¡Escribime por whatsapp con cualquier otra duda al
              respecto!
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#44337A"
                color="white"
                fontWeight="550"
                _expanded={{ bg: "#D6BCFA", color: "black" }}
                _hover={{ bg: "#F7FAFC", color: "#805AD5" }}
              >
                <Box as="span" flex="1" textAlign="left">
                  ¿Los precios son en dólares? ¿Qué medios de pago usás?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Sí, todos los precios están en dólares, debido a la situación y
              también debido a que me voy afuera. <br />
              Medios de pago: <br />
              - en USD cash al precio que figura, <br />
              - en USDT vía binance al precio que figura <br /> - vía Paypal en
              dólares con un 11% de recargo. <br />
              También podés pagar en pesos argentinos <br />
              - en pesos al precio del blue del día en efectivo <br /> - en
              pesos por transferencia bancaria o mercadopago al precio dolar
              blue del día con un recargo del 4%.
              <br /> ¡Si te interesa algo pero necesitás conversar los precios
              igualmente podés escribirme! La mayoría de los precios son
              charlables.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#44337A"
                color="white"
                fontWeight="550"
                _expanded={{ bg: "#D6BCFA", color: "black" }}
                _hover={{ bg: "#F7FAFC", color: "#805AD5" }}
              >
                <Box as="span" flex="1" textAlign="left">
                  ¿Reservás cosas?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Puedo guardarte algo unos días, pero necesito vender todo lo antes
              posible así que voy a estar priorizando a quien pueda retirar
              antes. Igualmente escribime y lo charlamos.
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <h2>
              <AccordionButton
                bg="#44337A"
                color="white"
                fontWeight="550"
                _expanded={{ bg: "#D6BCFA", color: "black" }}
                _hover={{ bg: "#F7FAFC", color: "#805AD5" }}
              >
                <Box as="span" flex="1" textAlign="left">
                  Is this information available in English anywhere?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Not all of it yet! Sorry! The English version of this site is
              still a work in progress. This particular page (including this
              FAQ) is available in English clicking in the button of the Navbar
              that says English. But the information of every item I have for
              sale isn't available in English yet. BUT I speak bilingual
              English, feel free to message me with any and all questions you
              may have, I'm more than happy to translate anything you need.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default Home;
