import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "'DM Serif Display', Georgia, serif",
    body: "'Outfit', -apple-system, sans-serif",
  },
  colors: {
    brand: {
      50: "#f8f5f0",
      100: "#ede6dc",
      200: "#d9c9b3",
      300: "#c2a885",
      400: "#ae8a5d",
      500: "#9c6f3d",
      600: "#7d5631",
      700: "#5e4025",
      800: "#3f2b1a",
      900: "#20150e",
    },
    accent: {
      50: "#fdf2f0",
      100: "#fadfd7",
      200: "#f5c4b3",
      300: "#eea38a",
      400: "#e88269",
      500: "#e05f47",
      600: "#c44a34",
      700: "#9a3a29",
      800: "#702b1f",
      900: "#461c14",
    },
  },
  shadows: {
    card: "0 4px 24px rgba(0,0,0,0.06)",
    cardHover: "0 12px 40px rgba(0,0,0,0.12)",
    soft: "0 2px 12px rgba(0,0,0,0.04)",
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === "dark" ? "#0f0f0f" : "#faf8f5",
        color: props.colorMode === "dark" ? "#e8e6e3" : "#1a1918",
      },
      "*::selection": {
        bg: "accent.200",
        color: "brand.900",
      },
    }),
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        transition: "all 0.2s ease",
      },
      variants: {
        solid: (props) => ({
          bg: props.colorMode === "dark" ? "accent.400" : "accent.500",
          color: "white",
          _hover: {
            bg: props.colorMode === "dark" ? "accent.300" : "accent.600",
            transform: "translateY(-2px)",
            boxShadow: "0 8px 24px rgba(224,95,71,0.35)",
          },
        }),
        ghost: (props) => ({
          color: props.colorMode === "dark" ? "gray.300" : "gray.700",
          _hover: {
            bg: props.colorMode === "dark" ? "whiteAlpha.100" : "blackAlpha.50",
          },
        }),
        outline: (props) => ({
          borderColor: props.colorMode === "dark" ? "gray.600" : "gray.300",
          color: props.colorMode === "dark" ? "gray.200" : "gray.700",
          _hover: {
            bg: props.colorMode === "dark" ? "whiteAlpha.100" : "gray.50",
          },
        }),
      },
    },
    Card: {
      baseStyle: (props) => ({
        container: {
          bg: props.colorMode === "dark" ? "#1a1a1a" : "white",
          borderRadius: "2xl",
          boxShadow: props.colorMode === "dark" 
            ? "0 4px 20px rgba(0,0,0,0.4)" 
            : "0 4px 24px rgba(0,0,0,0.06)",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          border: "1px solid",
          borderColor: props.colorMode === "dark" ? "whiteAlpha.100" : "gray.100",
          _hover: {
            transform: "translateY(-6px)",
            boxShadow: props.colorMode === "dark"
              ? "0 16px 48px rgba(0,0,0,0.5)"
              : "0 16px 48px rgba(0,0,0,0.1)",
          },
        },
      }),
    },
    Heading: {
      baseStyle: {
        fontWeight: "500",
        letterSpacing: "-0.02em",
        lineHeight: "1.2",
      },
    },
    Input: {
      variants: {
        filled: (props) => ({
          field: {
            bg: props.colorMode === "dark" ? "whiteAlpha.50" : "gray.50",
            borderRadius: "xl",
            _hover: {
              bg: props.colorMode === "dark" ? "whiteAlpha.100" : "gray.100",
            },
            _focus: {
              bg: props.colorMode === "dark" ? "whiteAlpha.100" : "white",
              borderColor: "accent.500",
            },
          },
        }),
      },
      defaultProps: {
        variant: "filled",
      },
    },
    Badge: {
      baseStyle: {
        borderRadius: "full",
        px: 2,
        py: 0.5,
        fontWeight: "600",
        fontSize: "xs",
      },
    },
    Container: {
      baseStyle: {
        maxW: "7xl",
        px: { base: 4, md: 6, lg: 8 },
      },
    },
  },
  semanticTokens: {
    colors: {
      "bg.surface": {
        default: "white",
        _dark: "#1a1a1a",
      },
      "bg.muted": {
        default: "gray.50",
        _dark: "#0f0f0f",
      },
      "border.default": {
        default: "gray.200",
        _dark: "whiteAlpha.100",
      },
      "text.primary": {
        default: "gray.900",
        _dark: "gray.100",
      },
      "text.secondary": {
        default: "gray.600",
        _dark: "gray.400",
      },
    },
  },
});

export default theme;
