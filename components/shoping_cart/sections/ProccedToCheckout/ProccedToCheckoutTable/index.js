import Link from "next/link";

const ProccedToCheckoutTable = (params) => {
    return (
        <div className="col-lg-6">
            <div className="shoping__checkout">
                <h5>Cart Total</h5>
                <ul>
                    <li>Subtotal <span>$454.98</span></li>
                    <li>Coupon <span>$20.00</span></li>
                    <li>Fees <span>$20.00</span></li>
                    <li>Total <span>$454.98</span></li>
                </ul>
                <Link href={{
                    pathname : '/checkout'
                }}><a className="primary-btn">PROCEED TO CHECKOUT</a></Link>
            </div>
        </div>
    );
};
export default ProccedToCheckoutTable;