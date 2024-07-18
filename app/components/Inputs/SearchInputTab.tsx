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
import { useState } from "react";
import { SearchInput } from "./SearchInput";
import { useRouter } from "next/navigation";

export function SearchInputTab() {
  const [movie, setMovie] = useState<string>("");
  const [series, setSeries] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const router = useRouter();

  const handleSearch = async (type: string) => {
    if (type === "movie") {
      router.push(`/search?query=${movie}&type=${type}`);
    }
    if (type === "series") {
      router.push(`/search?query=${series}&type=${type}`);
    }
    if (type === "people") {
      router.push(`/search?query=${people}&type=${type}`);
    }
  };

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
          <SearchInput
            value={movie}
            setValue={setMovie}
            placeholder={"Busque por um filme..."}
            handleSearch={() => handleSearch("movie")}
          />
        </TabPanel>
        <TabPanel>
          <SearchInput
            value={series}
            setValue={setSeries}
            placeholder={"Busque por uma série..."}
            handleSearch={() => handleSearch("series")}
          />
        </TabPanel>
        <TabPanel>
          <SearchInput
            value={people}
            setValue={setPeople}
            placeholder={"Busque por uma pessoa..."}
            handleSearch={() => handleSearch("people")}
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
