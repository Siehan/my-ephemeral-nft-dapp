import { Box, Center, Container, Heading, Image, Text } from "@chakra-ui/react";
import crane from "../images/crane.png";
import Navigation from "./Navigation";
import SlideFadeOnScroll from "./SlideFadeOnScroll";
import hardhat1 from "../images/hardhat1.png";

const NFTsGallery = () => {
  return (
    <>
      <Navigation />
      <Box as="section" w={"100%"} py={10}>
        <Container id="nfts-gallery" borderRadius="md" maxW="container.xl" py={20}>
          <SlideFadeOnScroll>
            <Heading
              mb={10}
              p={4}
              borderRadius="md"
              textShadow="1px 4px orange"
              align="center"
              bgGradient="linear(to-l, orange, yellow)"
              _hover={{
                bgGradient: "linear(to-r, red, orange, red)",
              }}
            >
              NFTs GALLERY - PAGE UNDER CONSTRUCTION
            </Heading>

            <Box align="center" borderRadius="md" boxShadow="xl" p={10} pb={10} overflow="hidden">
              <Box pb={10}>
                <Image src={crane} alt="icon contact" borderRadius="2xl" width={400} height={400} />
              </Box>
              <br />
              <Center>
                <Text fontSize={30} mb={10} textAlign="center">
                  Oops{" "}
                  <span role="img" aria-label="Pensive emoji">
                    👷👷🏽‍♀️👷🏾‍♀️
                  </span>{" "}
                  This page is under construction.
                  <br />I still working on it... hardhatestly...
                </Text>
              </Center>
              <Box pb={5}>
                <Image src={hardhat1} alt="hardhat1" borderRadius="2xl" width={100} height={75} />
              </Box>
            </Box>
          </SlideFadeOnScroll>
        </Container>
      </Box>
    </>
  );
};

export default NFTsGallery;
