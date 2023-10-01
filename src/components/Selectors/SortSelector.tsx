import useGameQuery from "../../store/gameQuery";
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

const SortSelector = () => {
  const [selected, setSort] = useGameQuery((s) => [s.query.sort, s.setSort]);
  const handleSelect = (item: (typeof SORTS)[number]) => {
    setSort(item.slug);
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
