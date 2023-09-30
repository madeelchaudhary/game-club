import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Base {
  id: number;
  name: string;
  slug?: string;
}

interface Props<T> {
  onSelect: (item: T) => void;
  selected?: T;
  items: T[];
  label: string;
  prefix?: string;
}

const Selector = <T extends Base>({
  prefix,
  items,
  label,
  onSelect,
  selected,
}: Props<T>) => {
  return (
    <Menu>
      <MenuButton
        size={{ base: "sm", md: "md" }}
        as={Button}
        rightIcon={<BsChevronDown />}
      >
        {prefix} {selected?.name || label}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            onClick={() => (selected?.id != item.id ? onSelect(item) : null)}
            key={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default Selector;
