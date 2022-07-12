const ProductCardDetails = ({ title, description, price, category }) => (
  <>
    <li className="flex items-center">
      <div className="w-1/4 border mr-5 p-2 text-sm break-words bg-green-100 font-bold">
        Title
      </div>
      <div className="w-3/4 border bg-blue-200 p-2 text-sm">{title}</div>
    </li>
    <li className="flex items-center">
      <div className="w-1/4 border mr-5 p-2 text-sm break-words bg-green-100 font-bold">
        Description
      </div>
      <div className="w-3/4 border bg-blue-200 p-2 text-xs break-words">
        {description}
      </div>
    </li>
    <li className="flex items-center">
      <div className="w-1/4 border mr-5 p-1 text-sm break-words bg-green-100 font-bold">
        Price
      </div>
      <div className="w-3/4 border bg-blue-200 p-2 text-xs">{price}</div>
    </li>

    <li className="flex items-center">
      <div className="w-1/4 border mr-5 p-1 text-sm break-words bg-green-100 font-bold">
        Category
      </div>
      <div className="w-3/4 border bg-blue-200 p-2 text-xs">{category}</div>
    </li>
  </>
);

export default ProductCardDetails;
