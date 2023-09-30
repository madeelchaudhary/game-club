import Selector from "./Selector";

const SORTS = [
  { id: 1, name: "Relevance" },
  { id: 2, name: "Release Date", slug: "-released" },
  { id: 3, name: "Date Added", slug: "-added" },
  { id: 4, name: "Name", slug: "name" },
  { id: 5, name: "Rating", slug: "-rating" },
  { id: 6, name: "Popularity", slug: "-metacritic" },
];

export type Sort = (typeof SORTS)[number]["slug"];

interface Props {
  onSelect: (item: Sort) => void;
  selected?: Sort;
}

const SortSelector = ({ onSelect, selected }: Props) => {
  const handleSelect = (item: (typeof SORTS)[number]) => {
    onSelect(item.slug);
  };

  const selectedSort = SORTS.find((sort) => sort.slug === selected);

  return (
    <Selector
      label="Relevance"
      prefix="Order By:"
      items={SORTS}
      onSelect={handleSelect}
      selected={selectedSort}
    />
  );
};

export default SortSelector;
