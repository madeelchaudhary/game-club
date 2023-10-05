import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import useGameQuery from "../../store/gameQuery";

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSearch = useGameQuery((s) => s.setSearch);
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (inputRef.current) {
      navigate("/");
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
