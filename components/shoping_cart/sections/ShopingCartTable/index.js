import ShopingCartItem from "./ShopingCartItem"

const ShopingCartTable = (params) => {
    return (
        <div className="shoping__cart__table">
            <table>
                <thead>
                    <tr>
                        <th className="shoping__product">Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    <ShopingCartItem />
                    <ShopingCartItem />
                    <ShopingCartItem />
                    </tbody>
            </table>
        </div>

    );
};
export default ShopingCartTable;