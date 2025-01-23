import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    _focusVisible: {
      "border-color": "white !important",
      "box-shadow": "none !important",
    },
    backgroundColor: "#fff !important",
    color: "black",
  },
});

// export the component theme
export const inputTheme = defineMultiStyleConfig({ baseStyle });
