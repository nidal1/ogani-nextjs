const CheckoutOrder = ({ products = [{
    productName: 'Vegetable’s Package',
    price: 75.99
},
{
    productName: 'Vegetable’s Package',
    price: 75.99
},],subTotal=750.99, coupon=50, fees=85.99, total=800 }) => {

    const ProductsList = products.map((el, i) => {
        return <li key={i}>{el.productName}<span>${el.price}</span></li>
    }) 
    return (
        <div className="col-lg-4 col-md-6">
            <div className="checkout__order">
                <h4>Your Order</h4>
                <div className="checkout__order__products">Products <span>Total</span></div>
                <ul>
                    { ProductsList }
                </ul>
                <div className="checkout__order__subtotal mb-0">Subtotal <span>${ subTotal }</span></div>
                <div className="checkout__order__subtotal mb-0 bt-none">Coupon <span>${ coupon }</span></div>
                <div className="checkout__order__subtotal bt-none">Fees <span>${ fees }</span></div>
                <div className="checkout__order__total">Total <span>${ total }</span></div>
                <div className="checkout__input__checkbox">
                    <label htmlFor="acc-or">
                        Create an account?
                        <input type="checkbox" id="acc-or" />
                        <span className="checkmark" />
                    </label>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.</p>
                <div className="checkout__input__checkbox">
                    <label htmlFor="payment">
                        Check Payment
                        <input type="checkbox" id="payment" />
                        <span className="checkmark" />
                    </label>
                </div>
                <div className="checkout__input__checkbox">
                    <label htmlFor="paypal">
                        Paypal
                        <input type="checkbox" id="paypal" />
                        <span className="checkmark" />
                    </label>
                </div>
                <button type="submit" className="site-btn">PLACE ORDER</button>
            </div>
        </div>

    );
};
export default CheckoutOrder;