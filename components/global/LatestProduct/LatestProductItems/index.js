import LatestProductContainer from "./LatestProductContainer"
import LatestProductItem from "./LatestProductContainer/LatestProductItem"

import { useEffect } from "react";

const LatestProductItems = ({ heading = 'Latest Products', responsive = true }) => {
    useEffect(() => {
        /*--------------------------
        Latest Product Slider
    ----------------------------*/
        $(".latest-product__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 1,
            dots: false,
            nav: true,
            navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true
        });
    })
    return (
        <div className={`${responsive && 'col-lg-4 col-md-6'} latest-product__text`}>
            <h4>{heading}</h4>
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
    );
};
export default LatestProductItems;