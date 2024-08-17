import Footer from "../../Component/MainLayout/Sheard/Footer";
import Navar from "../../Component/MainLayout/Sheard/Navar";
import ProductList from "../../Component/Pagination/ProductList";

const Home = () => {
    return (
        <div>
            {/* <Navar></Navar> */}
            <ProductList></ProductList>
            <Footer></Footer>
        </div>
    );
};

export default Home;