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

function English() {
  return (
    <>
      <div className="center">
        <Image borderRadius="full" boxSize="150px" src={brandImage} />
        <PageTitle title="Hi!" />
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
              Hi! My name is Mai <br />
              I'm moving out of the country so I'm selling a lot of stuff, most
              of my furniture and appliances that've bought and loved for the
              last 3 years.{" "}
            </Text>
          </CardBody>
        </Card>
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
              I'm really sorry that a version of the shop fully translated to
              Englihs isn't available yet. The English version of the page is
              still a work in progress. Please feel free to contact me through
              Whatsapp with any questions you may have regarding any of the
              items for sale. I'm fully bilingual and would be more than happy
              to translate anything you need.{" "}
            </Text>
          </CardBody>
        </Card>
      </div>
      <div className="center">
        <Button colorScheme="purple" size="lg">
          <Link to={"/coursesShop"}> Let's see it!</Link>
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
            FAQ - Frequently Asked Questions{" "}
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
                  How can I contact you?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              In the top right corner of the page, within the navbar, there's a
              button that says "¡Contactame!" which is Contact me in Spanish. If
              you click it, it will automatically redirect you to a link to send
              me a Whatsapp. You can of course message me in English. If, for
              any reason the button is not working or if you want to save my
              contact and message me at a later time, here's my Whatsapp number.
              (+549)11 3401 7983. Please contact me through Whatsapp, I don't
              receive calls nor SMS.
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
                  Where can I pick up the stuff? Do you have a delivery service?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              The pick up point is in -one block away from Moldes st. and Virrey
              del Pino st. corner, which is 4 blocks away from the Station José
              Hernandez of the Subway Line D. Right now I am not offering a
              delivery service, but you can of course send the delivery service
              of your preference instead of coming yourself. Days and times for
              pickup are to be arranged. Feel free to message me with any
              further questions on this regard.
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
                  Are the prices in US Dollars? How can I pay you?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Yes, all the prices are in USD due to the context and also because
              I'm moving out of the country. <br />
              You can pay: <br />
              - in USD cash at the listed price.
              <br />- In USDT via Binance, also at the listed price. <br />- In
              USD through Paypal with an extra charge of 11% due to Paypal's
              commissions. <br />
              Or also in argentinian pesos, at the blue rate of the day, <br />{" "}
              - in cash in ARS at the listed price <br />
              - in ARS through a bank transfer or mercadopago transfer with a 4%
              of extra charge. <br />
              Anyways, if you are interested in something but want to talk about
              the price, feel free to message me! We can totally talk about it.
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
                  Can you save me something for some time?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              I can save you an item for a few days, but I need to sell
              everything as soon as possible so I will be prioritising whomever
              can pick it up first. Anyways, feel free to write me down to ask
              for any specific items or situations.
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
                  Is the shop also available in English anywhere?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              Not yet! Sorry! The English version of the shops is not done yet.
              But, as I said, feel free to message me with any and all questions
              you may have, I'll be happy to translate the information of any
              item you might need.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

export default English;
