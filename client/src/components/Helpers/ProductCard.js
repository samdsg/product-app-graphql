import ProductCardDetails from "./ProductCardDetails";

const Product = ({ dateAdded, products }) => {
  return (
    <div
      className="px-3 py-3 
              bg-white
              border-gray-200 
              shadow-sm 
              dark:bg-gray-800 
              dark:border-gray-700 mb-10
              border-2"
      key={products}
    >
      <div className="mb-3 border w-24">
        <h1 className="font-bold text-sm whitespace-nowrap bg-red-200 capitalize">
          {dateAdded}
        </h1>
      </div>
      {products.map(({ title, description, price, category }, key) => (
        <ul className="mb-10" {...{ key }}>
          <ProductCardDetails {...{ title, description, price, category }} />
        </ul>
      ))}
    </div>
  );
};

export default Product;
