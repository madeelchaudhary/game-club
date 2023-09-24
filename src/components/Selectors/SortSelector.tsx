import Selector from "./Selector";

const SORTS = [
  { id: 1, name: "Relevance", slug: null },
  { id: 2, name: "Release Date", slug: "-released" },
  { id: 3, name: "Date Added", slug: "-added" },
  { id: 4, name: "Name", slug: "name" },
  { id: 5, name: "Rating", slug: "-rating" },
  { id: 6, name: "Popularity", slug: "-metacritic" },
];

export type Sort = (typeof SORTS)[number];

interface Props {
  onSelect: (item: Sort) => void;
  selected: Sort | null;
}

const SortSelector = ({ onSelect, selected }: Props) => {
  return (
    <Selector
      label="Relevance"
      prefix="Order By:"
      items={SORTS}
      onSelect={onSelect}
      selected={selected}
    />
  );
};

export default SortSelector;
