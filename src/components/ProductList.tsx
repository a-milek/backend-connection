import { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
  const [products, setProducts] = useState<string[]>([]);
  //call server to fetch products
  useEffect(() => {
    console.log("Fetching products in", category);
    setProducts(["Clothing", "Household"]);
  }, [category]); //second argument to stop continnuous loop

  return <div>ProductList</div>;
};

export default ProductList;
