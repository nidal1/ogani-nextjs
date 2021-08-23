import Link from "next/link";

const ShopingCartBtn = (params) => {
    return (
        <div className="col-lg-12">
            <div className="shoping__cart__btns">
                <Link href={
                    { pathname: '/shop', }
                }><a className="primary-btn cart-btn">CONTINUE SHOPPING</a></Link>
            </div>
        </div>
    );
};
export default ShopingCartBtn;