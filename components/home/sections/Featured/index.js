import FeaturedControls from "./FeaturedControls";
import FeaturedItem from "../../../global/FeaturedItem";

const Featured = (params) => {
    return (
        <>
            {/* Featured Section Begin */}
            <section className="featured spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Featured Product</h2>
                            </div>
                            <FeaturedControls />
                        </div>
                    </div>
                    <div className="row featured__filter">
                        <FeaturedItem filtredComponents ={false}/>
                        <FeaturedItem filtredComponents/>
                        <FeaturedItem filtredComponents/>
                        <FeaturedItem filtredComponents/>
                    </div>
                </div>
            </section>
            {/* Featured Section End */}
        </>
    );
};
export default Featured;