import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    _selected: {
      borderColor: "red.500",
    },
  },
});

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ baseStyle });
