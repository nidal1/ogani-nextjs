import { useEffect } from "react";
import LatestProductItems from "./LatestProductItems";

const LatestProduct = ({value="customAlt"}) => {
    
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