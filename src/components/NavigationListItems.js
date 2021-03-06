import { List, ListItem, Link } from "@chakra-ui/react";

const NavigationListItems = ({ sx }) => {
  return (
    <List
      sx={{
        textTransform: "uppercase",
        a: { fontSize: "20px", p: 2, display: "inline-block" },
        ...sx,
      }}
    >
      <ListItem>
        <Link href="/">Home</Link>
      </ListItem>

      <ListItem>
        <Link href="/#about">About</Link>
      </ListItem>

      <ListItem>
        <Link href="/#create-your-nft">Create your NFT</Link>
      </ListItem>

      <ListItem>
        <Link href="/#nfts-gallery">NFTs Gallery</Link>
      </ListItem>

      <ListItem>
        <Link href="/#receipt">Receipt</Link>
      </ListItem>

      <ListItem>
        <Link href="/#social-media">Social Media</Link>
      </ListItem>

      <ListItem>
        <Link href="/#contact">Contact</Link>
      </ListItem>
    </List>
  );
};

export default NavigationListItems;
