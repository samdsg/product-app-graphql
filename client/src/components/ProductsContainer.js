import { useLazyQuery, useQuery } from "@apollo/client";

/* Component(s) */
import ProductCard from "./Helpers/ProductCard";
import Loading from "./Helpers/Loading";
import FilterContainer from "./FilterContainer";
import Search from "./Search";

/* Queries */
import { GET_TRANSACTIONS } from "../queries/transactionsQueries";
import { FILTER_TRANSACTION } from "../queries/filterQueries";

const DataContainer = () => {
  // transaction query
  const { loading, error, data } = useQuery(GET_TRANSACTIONS);
  // filter query
  const [executeSearch, { data: filteredData, loading: filterLoading }] =
    useLazyQuery(FILTER_TRANSACTION);

  // filter -> function
  const onFilter = (filter) => {
    executeSearch({
      variables: { filter },
    });
  };

  // check if data in filter object
  const filterFound =
    filteredData && filteredData.category
      ? filteredData.category.length > 0
        ? true
        : false
      : false;

  if (loading || filterLoading) return <Loading />;
  if (error)
    return <p className="font-bold text-red-500">Something Went Wrong</p>;

  return (
    <>
      <Search />
      <FilterContainer {...{ onFilter }} />

      {filterFound && (
        <div className={`max-h-96 overflow-y-scroll px-1`}>
          {filteredData.category.map(({ dateAdded, products }, _key) => (
            <div key={dateAdded}>
              <ProductCard {...{ dateAdded, products }} />
            </div>
          ))}
        </div>
      )}

      {!loading && !error && !filterFound && (
        <div className={`max-h-96 overflow-y-scroll px-1`}>
          {data.transactions.map(({ dateAdded, products }, _key) => (
            <div key={_key}>
              <ProductCard {...{ dateAdded, products }} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default DataContainer;
