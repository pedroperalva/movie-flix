import { extendTheme } from "@chakra-ui/react";
import { tabsTheme } from "./themes/tabsTheme";

export const theme = extendTheme({
  components: { Tabs: tabsTheme },
  colors: {
    primary: "red",
  },
});
