import Navigation from "./Navigation";
import Header from "./Header";
import About from "./About";
import CreateYourNFT from "../CreateYourNFT";
import NFTsGallery from "./NFTsGallery";
import SocialMedia from "./SocialMedia";
import Contact from "./Contact";
import Receipt from "./Receipt";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <Header />
      <About />
      <CreateYourNFT />
      <NFTsGallery />
      <SocialMedia />
      <Contact />
      <Receipt />
      <Footer />
    </>
  );
};

export default LandingPage;
