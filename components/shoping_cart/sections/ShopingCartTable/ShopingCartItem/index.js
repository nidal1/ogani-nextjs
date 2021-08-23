import ProduitQuantity from "../../../../global/ProduitQuantity"


const ShopingCartItem = ({ img='cart-1', value='customAlt', heading='Vegetable’s Package', price='55' }) => {
    return (
        <tr>
            <td className="shoping__cart__item">
                <img src={`/img/cart/${img}.jpg`} alt={value.toString()} />
                <h5>{ heading }</h5>
            </td>
            <td className="shoping__cart__price">
                ${ price }
            </td>
            <td className="shoping__cart__quantity">
                <div className="quantity">
                    <ProduitQuantity />
                </div>
            </td>
            <td className="shoping__cart__total">
                $110.00
            </td>
            <td className="shoping__cart__item__close">
                <span className="icon_close" />
            </td>
        </tr>
    );
};
export default ShopingCartItem;