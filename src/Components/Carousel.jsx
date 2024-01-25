import { useState } from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <Box position="relative" height="250px" width="100%">
      <IconButton
        icon={<ChevronLeftIcon w={6} h={6} />}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={goToPrevious}
        aria-label="Previous image"
        variant="ghost"
        color="gray.600"
      />
      <IconButton
        icon={<ChevronRightIcon w={6} h={6} />}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        onClick={goToNext}
        aria-label="Next image"
        variant="ghost"
        color="gray.600"
      />
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index}`}
          display={currentIndex === index ? "block" : "none"}
          width="100%"
          height="auto"
          objectFit="contain" // Changed to contain
          maxH="250px" // Maximum height
          borderRadius="lg"
        />
      ))}
    </Box>
  );
};

export default Carousel;
