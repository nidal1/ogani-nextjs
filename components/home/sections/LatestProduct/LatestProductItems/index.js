import LatestProductContainer from "./LatestProductContainer"
import LatestProductItem from "./LatestProductContainer/LatestProductItem"

const LatestProductItems = (params) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
                <h4>Latest Products</h4>
                <div className="latest-product__slider owl-carousel">
                    <LatestProductContainer>
                        <LatestProductItem />
                        <LatestProductItem />
                        <LatestProductItem />
                    </LatestProductContainer>
                    <LatestProductContainer>
                        <LatestProductItem />
                        <LatestProductItem />
                        <LatestProductItem />
                    </LatestProductContainer>
                </div>
            </div>
        </div>
    );
};
export default LatestProductItems;