import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Base {
  id: number;
  name: string;
  slug: string | null;
}

interface Props<T> {
  onSelect: (item: T) => void;
  selected: T | null;
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
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {prefix} {selected?.name || label}
      </MenuButton>
      <MenuList>
        {items.map((item) => (
          <MenuItem
            onClick={() =>
              selected?.slug != item.slug ? onSelect(item) : null
            }
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
