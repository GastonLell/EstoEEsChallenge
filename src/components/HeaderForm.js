import { Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import back from "../assets/back.svg";
const HeaderForm = ({ text }) => {
  return (
    <HStack h={{base: "40px", md: "56px"}} px={{base: 4, md: 10}} py={{base: 4, md: 2}} bg="#fff" border="1px" borderColor="gray.200">
      <Link to="/">
        <Image src={back} />
      </Link>
      <Text fontFamily="title" fontSize="12px">
        Back
      </Text>
      <Heading as="h2" size="16px" fontFamily="title">
        {text}
      </Heading>
    </HStack>
  );
};
export default HeaderForm;
