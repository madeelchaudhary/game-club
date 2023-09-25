import { useRef } from "react";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (query: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current) {
      onSearch(inputRef.current.value);
    }
  }
  return (
    <Box w="full">
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input ref={inputRef} placeholder="Search games..." rounded="2xl" />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
