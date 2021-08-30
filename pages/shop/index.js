import Base from '../../components/global/Base';
import { useEffect } from 'react';
import ShopSidebar from '../../components/shop/sections/ShopSidebar';
import ShopProductDsicount from '../../components/shop/sections/ShopProductDsicount';
import FilterItems from '../../components/shop/sections/FilterItems';
import FiltredProducts from '../../components/shop/sections/FiltredProducts';
import Paginations from '../../components/shop/sections/Paginations';

export default function Shop({ value = "customAlt" }) {

    useEffect(() => {

        /*--------------------------
            Select
        ----------------------------*/
        $("select").niceSelect();


    });
    return (
        <Base>


            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <ShopSidebar />
                        <div className="col-lg-9 col-md-7">
                            <ShopProductDsicount />
                            <FilterItems />
                            <FiltredProducts />
                            <Paginations />

                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

        </Base>
    );
}