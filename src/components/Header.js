import { Box, Button, Container, Image, Heading, Stack, Text } from "@chakra-ui/react";
import create_your_nft from "../images/create_your_nft.jpeg";
import create_your_nft2 from "../images/create_your_nft2.png";
import SlideFadeOnScroll from "./SlideFadeOnScroll";

const Header = () => {
  return (
    <>
      <Container id="home" borderRadius="md" maxW="container.xl" pt={28} pb={10}>
        <SlideFadeOnScroll>
          <Stack
            direction={["column-reverse", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1" align="center">
              <Heading
                mb={3}
                fontSize={40}
                bgGradient="linear(to-l, #3CAADD, #4FAA1B)"
                _hover={{
                  bgGradient: "linear(to-r, cyan.500, blue.600, purple.600)",
                }}
                bgClip="text"
              >
                Welcome to{" "}
                <Text as="span" color={"teal.500"} fontSize={40} fontWeight="bold">
                  The ephemeral NFT gallery
                </Text>{" "}
              </Heading>
              <Text fontSize={28} mb={6} py={8}>
                Create your own Non Fungible Token (NFT) with your favorite picture !!!
              </Text>{" "}
            </Box>
            <Box pb={10} mb={20}>
              <Image
                src={create_your_nft}
                alt="create_your_nft"
                width={400}
                height={400}
                borderRadius="2xl"
                align="center"
              />
            </Box>
          </Stack>
          <Stack
            direction={["column-reverse", null, "row"]}
            sx={{
              gap: "2rem",
            }}
            alignItems="center"
          >
            <Box flex="1" align="center">
              <Heading
                mb={6}
                fontSize={40}
                bgGradient="linear(to-r, cyan.500, blue.600, purple.600)"
                _hover={{
                  bgGradient: "linear(to-l, #3CAADD, #4FAA1B)",
                }}
                bgClip="text"
              >
                Choose one of your favorite picture{" "}
                <Text as="span" color={"pink.500"} fontSize={40} fontWeight="bold">
                  and create an NFT
                </Text>{" "}
              </Heading>
              <Text fontSize={28} mb={6} py={8}>
                The rule is very simple. You can go directly to the{" "}
                <Button as="a" href="#about" size="lg" fontSize={28} color={"orange.500"}>
                  About
                </Button>{" "}
                page for more informations or{" "}
                <Button as="a" href="#create-your-nft" size="lg" fontSize={28} color={"pink.500"}>
                  Create your NFT
                </Button>{" "}
                directly{" "}
              </Text>{" "}
            </Box>
            <Box pb={10} mb={20}>
              <Image
                src={create_your_nft2}
                alt="create_your_nft2"
                width={400}
                height={400}
                borderRadius="2xl"
                align="center"
              />
            </Box>
          </Stack>
        </SlideFadeOnScroll>
      </Container>
    </>
  );
};

export default Header;
