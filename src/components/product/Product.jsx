import './product.css';
import { FaStar } from "react-icons/fa";


function Product({ name, img, price, stars }) {
    const priceReplace = String(price).length > 2 ? String(price).replaceAll('.', ',') : `${price},00`;
    return (
        <div className="product">
            <img src={img} alt="Imagem produto" />
            <h2 className='product-title'>{name}</h2>
            <div>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div> 
            <h4 className='product-price'>{`R$ ${priceReplace}`}</h4>
        </div>
    )
}

export default Product;