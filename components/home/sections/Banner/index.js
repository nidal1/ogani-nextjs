import { useEffect } from "react";
import { useSelector } from "react-redux";
import BannerItem from "./BannerItem"

const Banner = ({value="customAlt"}) => {

    const products = useSelector(state => state.products);

    const { banners } = products;

    const items = banners.map((el, i) => {
        return (
            <BannerItem key={i} img={el} />
        );
    })
    return (
        <>
            {/* Banner Begin */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        { items }
                    </div>
                </div>
            </div>
            {/* Banner End */}
        </>
    );
};
export default Banner;