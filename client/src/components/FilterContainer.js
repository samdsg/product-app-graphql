import { useState } from "react";

/* Component(s) */
import Keyword from "./Helpers/KeyWord";

const FilterContainer = ({ onFilter }) => {
  // Dummy filter keywords
  const [filters] = useState([
    { title: "all" },
    { title: "phones" },
    { title: "laptops" },
    { title: "cosmetics" },
  ]);

  return (
    <div className="flex flex-row snap-x space-x-4 mb-10 overflow-x-scroll pb-3">
      {filters.map(({ title }, _key) => (
        <div key={_key}>
          <Keyword {...{ title, onFilter }} />
        </div>
      ))}
    </div>
  );
};

export default FilterContainer;
