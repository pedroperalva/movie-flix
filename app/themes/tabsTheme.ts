import { tabsAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(tabsAnatomy.keys);

const baseStyle = definePartsStyle({
  tab: {
    _selected: {
      borderColor: "primary",
    },
  },
});

export const tabsTheme = defineMultiStyleConfig({ baseStyle });
