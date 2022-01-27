import { getAllProduct } from "../../fake-data";
import ProductCard from "../../components/ProductCard";
import { PageTitle, ProductGallery } from "./index.style";

const Home = () => {
    const products = getAllProduct();

    return (
        <>
            <PageTitle>商品列表</PageTitle>
            <ProductGallery>
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </ProductGallery>
        </>
    );
};

export default Home;