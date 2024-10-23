import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/product-list/ProductList";

const Home = () => {
  return (
    <div className="flex items-center justify-center">
      <Navbar>
        <ProductList></ProductList>
      </Navbar>
    </div>
  );
};

export default Home;
