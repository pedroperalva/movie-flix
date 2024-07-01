"use client";

import {
  Input,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

export function SearchInput() {
  return (
    <Tabs position="relative" variant="unstyled" justifySelf={"center"}>
      <TabList color={"white"}>
        <Tab>Filmes</Tab>
        <Tab>Séries</Tab>
        <Tab>Pessoas</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <Input
            bg="white"
            color="black"
            placeholder="Busque por um filme..."
          />
        </TabPanel>
        <TabPanel>
          <Input
            bg="white"
            color="black"
            placeholder="Busque por uma série..."
          />
        </TabPanel>
        <TabPanel>
          <Input
            bg="white"
            color="black"
            placeholder="Busque por uma pessoa..."
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
