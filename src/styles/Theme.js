import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "'Roboto', sans-serif",
    title: "'Inter', sans-serif",
  },

  colors: {
    bgGray: {
      100: "rgba(0, 0, 0, 0,02)"
    },
    brandBG: {
      50: "#F0F2F5;",
    },
    brandEstoEs: {
      50: "#F5222D",
      100: "#ed3b45",
    },
  },

  components: {
    Button: {
      variants: {
        estoEs: {
          color: "#FFF",
          bg: "brandEstoEs.50",
          borderRadius: "4px",
          padding: "8px 16px 8px 16px",
          fontFamily:"body",
          fontWeight:"400",
          fontSize: "16px",
          h: "40px",
          _hover: { bg: "brandEstoEs.100" },
        },
        estoEsOutline: {
          color: "brandEstoEs.50",
          bg: "#fff",
          borderRadius: "4px",
          padding: "8px 16px 8px 16px",
          fontFamily:"body",
          fontWeight:"400",
          fontSize: "16px",
          h: "32px",
          _hover: { bg: "brandEstoEs.100" },
        },
      },
    },
  },
});
