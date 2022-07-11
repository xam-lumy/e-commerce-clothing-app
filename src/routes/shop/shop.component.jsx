import { useContext } from "react";
import  {ProductsContext}  from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.components";
import './shop.styles.scss';

const Shop = () => {
    const {products} = useContext(ProductsContext);
    return(
        <div className="product-container">
            {products.map((product)=>(
             <div>
              <ProductCard key={product.id} product={product} />
             </div>
            ))}
        </div>
    )
 };

 export default Shop;