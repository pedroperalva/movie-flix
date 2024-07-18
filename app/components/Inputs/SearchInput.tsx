import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

export function SearchInput({
  value,
  setValue,
  placeholder,
  handleSearch,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  placeholder: string;
  handleSearch: () => void;
}) {
  return (
    <InputGroup>
      <Input
        value={value}
        bg="white"
        color="black"
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
      />
      <InputRightElement width="5rem">
        <Button
          bgColor={"red.600"}
          h={"2.2rem"}
          mr={"0.2rem"}
          textColor={"white"}
          onClick={handleSearch}
        >
          Buscar
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
