import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/logo.png";

const Logo = () => {
  return (
    <HStack h={{base: "40px", md: "56px"}} w="100%" px={{base: 4, md: 10}} bg="#fff">
      <Link to="/">
        <Image src={LogoImg} w="50px" h="auto" objectFit="cover" />
      </Link>
    </HStack>
  );
};
export default Logo;
