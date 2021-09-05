import FeaturedControls from "./FeaturedControls";
import FeaturedItem from "../../../global/FeaturedItem";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Featured = (params) => {
    const products = useSelector(state => state.products);
    const { filtredItems } = products;

    const items = filtredItems.map((el) => {
        return (
            <FeaturedItem 
            key={el.productId}
            filtredComponents 
            category = {el.category}
            bgImg = {el.productImg}
            heading = {el.heading}
            price = {el.price}
            discount = {el.discount}
            responsive={
                {
                    lg: 3,
                    md: 4,
                    sm: 6
                }
            
            } />
        );
    })
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
                            <FeaturedControls featuredCategories={products.categories} />
                        </div>
                    </div>
                    <div className="row featured__filter">
                        { items }
                    </div>
                </div>
            </section>
            {/* Featured Section End */}
        </>
    );
};
export default Featured;