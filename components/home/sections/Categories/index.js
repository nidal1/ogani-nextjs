import { useEffect } from "react";
import CategoriesItem from "./CategoriesItem";


const Categories = (params) => {
    useEffect(() => {
        /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 4,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                items: 1,
            },

            480: {
                items: 2,
            },

            768: {
                items: 3,
            },

            992: {
                items: 4,
            }
        }
    });
    })
    return (
        <>
            {/* Categories Section Begin */}
            <section className="categories">
                <div className="container">
                    <div className="row">
                        <div className="categories__slider owl-carousel">
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                            <CategoriesItem />
                        </div>
                    </div>
                </div>
            </section>
            {/* Categories Section End */}
        </>
    );
};
export default Categories;