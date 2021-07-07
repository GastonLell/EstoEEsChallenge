import { Heading } from "@chakra-ui/layout";

const Title = ({text}) => {
    return(
        <Heading as="h2" size={{base: "16px", md: "24px"}}>
            {text}
        </Heading>
    )
}
export default Title;