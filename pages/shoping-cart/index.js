import Base from '../../components/global/Base';
import ProccedToCheckout from '../../components/shoping_cart/sections/ProccedToCheckout';
import ShopingCartBtn from '../../components/shoping_cart/sections/ShopingCartBtn';
import ShopingCartTable from '../../components/shoping_cart/sections/ShopingCartTable';

export default function ShopingCart(params) {
    return (
        <Base>
            {/* Shoping Cart Section Begin */}
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <ShopingCartTable />
                        </div>
                    </div>
                    <div className="row">
                        <ShopingCartBtn />
                        <ProccedToCheckout />
                    </div>
                </div>
            </section>
            {/* Shoping Cart Section End */}

        </Base>
    )
}