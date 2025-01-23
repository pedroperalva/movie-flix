import { extendTheme } from "@chakra-ui/react";
import { tabsTheme } from "./themes/tabsTheme";
import { inputTheme } from "./themes/inputTheme";

export const theme = extendTheme({
  components: { Tabs: tabsTheme, Input: inputTheme },
  colors: {
    primary: "#B70002",
  },
});
