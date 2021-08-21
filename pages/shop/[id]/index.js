import Base from '../../../components/global/Base';

import { useRouter } from "next/dist/client/router";
import ProductDetailsPictures from '../../../components/product_details/sections/ProductDetailsPictures';
import ProductDetailsText from '../../../components/product_details/sections/ProductDetailsText';
import ProductDetailTab from '../../../components/product_details/sections/ProductDetailsTab';
import RelatedProduct from '../../../components/product_details/sections/RelatedProduct';

export default function ShopDetails(params) {
    const route = useRouter();
    return (
        <Base>
            <section className="product-details spad">
                <div className="container">
                    <div className="row">
                        <ProductDetailsPictures />
                        <ProductDetailsText />
                        <ProductDetailTab />
                    </div>
                </div>
            </section>
            {/* Product Details Section End */}
            {/* Related Product Section Begin */}
            <RelatedProduct />
        </Base>
    )
}