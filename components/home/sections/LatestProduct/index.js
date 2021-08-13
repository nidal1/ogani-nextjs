import { useEffect } from "react";
import LatestProductItems from "./LatestProductItems";

const LatestProduct = ({value="customAlt"}) => {
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
        <>
            {/* Latest Product Section Begin */}
            <section className="latest-product spad">
                <div className="container">
                    <div className="row">
                        <LatestProductItems />
                        <LatestProductItems />
                        <LatestProductItems />
                    </div>
                </div>
            </section>
            {/* Latest Product Section End */}
        </>
    );
};
export default LatestProduct