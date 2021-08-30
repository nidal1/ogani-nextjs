import OwlCarousel from "../../../global/OwlCarousel";
import CategoriesItem from "./CategoriesItem";

import { useEffect, useState } from 'react'
import { useSelector } from "react-redux";

const Categories = () => {
    // const [items, setItems] = useState(null)
    const products = useSelector(state => state.products);
    let { catoriezedItems } = products;
    let elementsItems = catoriezedItems?.map((el) => {
        return (
            <CategoriesItem
                key={el.productId}
                bgImg={el.productImg}
                heading={el.heading}
            />
        )
    });


    useEffect(() => {
    }, [catoriezedItems])


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
                                0: 1,
                                480: 2,
                                768: 3,
                                992: 4
                            }}>
                            {elementsItems}
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