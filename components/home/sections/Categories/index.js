import OwlCarousel from "../../../global/OwlCarousel";
import CategoriesItem from "./CategoriesItem";


const Categories = (params) => {
    return (
        <>
            {/* Categories Section Begin */}
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <OwlCarousel
                            elementByClassName='categories__slider'
                            loop={1}
                            items={4}
                            nav={true}
                            navText={["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"]}
                            responsive={{
                                0:1,
                                480:2,
                                768:3,
                                992:4
                            }}>
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                        </OwlCarousel>
                        <div className="categories__slider owl-carousel">

                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}
        </>
    );
};
export default Categories;