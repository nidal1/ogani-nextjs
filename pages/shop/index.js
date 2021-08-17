import Base from '../../components/global/Base';
import { useEffect } from 'react';

export default function Shop({ value = "customAlt" }) {

    useEffect(() => {
        /*-----------------------------
            Product Discount Slider
        -------------------------------*/
        $(".product__discount__slider").owlCarousel({
            loop: true,
            margin: 0,
            items: 3,
            dots: true,
            smartSpeed: 1200,
            autoHeight: false,
            autoplay: true,
            responsive: {

                320: {
                    items: 1,
                },

                480: {
                    items: 2,
                },

                768: {
                    items: 2,
                },

                992: {
                    items: 3,
                }
            }
        });

        /*--------------------------
            Select
        ----------------------------*/
        $("select").niceSelect();

        /*-----------------------
            Price Range Slider
        ------------------------ */
        var rangeSlider = $(".price-range"),
            minamount = $("#minamount"),
            maxamount = $("#maxamount"),
            minPrice = rangeSlider.data('min'),
            maxPrice = rangeSlider.data('max');
        rangeSlider.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function (event, ui) {
                minamount.val('$' + ui.values[0]);
                maxamount.val('$' + ui.values[1]);
            }
        });
        minamount.val('$' + rangeSlider.slider("values", 0));
        maxamount.val('$' + rangeSlider.slider("values", 1));
    });
    return (
        <Base>


            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <div className="sidebar__item">
                                    <h4>Department</h4>
                                    <ul>
                                        <li><a href="#">Fresh Meat</a></li>
                                        <li><a href="#">Vegetables</a></li>
                                        <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                                        <li><a href="#">Fresh Berries</a></li>
                                        <li><a href="#">Ocean Foods</a></li>
                                        <li><a href="#">Butter &amp; Eggs</a></li>
                                        <li><a href="#">Fastfood</a></li>
                                        <li><a href="#">Fresh Onion</a></li>
                                        <li><a href="#">Papayaya &amp; Crisps</a></li>
                                        <li><a href="#">Oatmeal</a></li>
                                    </ul>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Price</h4>
                                    <div className="price-range-wrap">
                                        <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={10} data-max={540}>
                                            <div className="ui-slider-range ui-corner-all ui-widget-header" />
                                            <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                                            <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                                        </div>
                                        <div className="range-slider">
                                            <div className="price-input">
                                                <input type="text" id="minamount" />
                                                <input type="text" id="maxamount" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar__item sidebar__item__color--option">
                                    <h4>Colors</h4>
                                    <div className="sidebar__item__color sidebar__item__color--white">
                                        <label htmlFor="white">
                                            White
                                            <input type="radio" id="white" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--gray">
                                        <label htmlFor="gray">
                                            Gray
                                            <input type="radio" id="gray" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--red">
                                        <label htmlFor="red">
                                            Red
                                            <input type="radio" id="red" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--black">
                                        <label htmlFor="black">
                                            Black
                                            <input type="radio" id="black" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--blue">
                                        <label htmlFor="blue">
                                            Blue
                                            <input type="radio" id="blue" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__color sidebar__item__color--green">
                                        <label htmlFor="green">
                                            Green
                                            <input type="radio" id="green" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <h4>Popular Size</h4>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="large">
                                            Large
                                            <input type="radio" id="large" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="medium">
                                            Medium
                                            <input type="radio" id="medium" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="small">
                                            Small
                                            <input type="radio" id="small" />
                                        </label>
                                    </div>
                                    <div className="sidebar__item__size">
                                        <label htmlFor="tiny">
                                            Tiny
                                            <input type="radio" id="tiny" />
                                        </label>
                                    </div>
                                </div>
                                <div className="sidebar__item">
                                    <div className="latest-product__text">
                                        <h4>Latest Products</h4>
                                        <div className="latest-product__slider owl-carousel">
                                            <div className="latest-prdouct__slider__item">
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="/img/latest-product/lp-1.jpg" alt={value.toString()} />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="/img/latest-product/lp-2.jpg" alt={value.toString()} />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="/img/latest-product/lp-3.jpg" alt={value.toString()} />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="latest-prdouct__slider__item">
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="/img/latest-product/lp-1.jpg" alt={value.toString()} />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="/img/latest-product/lp-2.jpg" alt={value.toString()} />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                                <a href="#" className="latest-product__item">
                                                    <div className="latest-product__item__pic">
                                                        <img src="/img/latest-product/lp-3.jpg" alt={value.toString()} />
                                                    </div>
                                                    <div className="latest-product__item__text">
                                                        <h6>Crab Pool Security</h6>
                                                        <span>$30.00</span>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                <div className="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div className="row">
                                    <div className="product__discount__slider owl-carousel">
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg" data-setbg="/img/product/discount/pd-1.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg" data-setbg="/img/product/discount/pd-2.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Vegetables</span>
                                                    <h5><a href="#">Vegetables’package</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg" data-setbg="/img/product/discount/pd-3.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Mixed Fruitss</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg" data-setbg="/img/product/discount/pd-4.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg" data-setbg="/img/product/discount/pd-5.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="product__discount__item">
                                                <div className="product__discount__item__pic set-bg" data-setbg="/img/product/discount/pd-6.jpg">
                                                    <div className="product__discount__percent">-20%</div>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                                    </ul>
                                                </div>
                                                <div className="product__discount__item__text">
                                                    <span>Dried Fruit</span>
                                                    <h5><a href="#">Raisin’n’nuts</a></h5>
                                                    <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value={0}>Default</option>
                                                <option value={0}>Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6><span>16</span> Products found</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className="icon_grid-2x2" />
                                            <span className="icon_ul" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-1.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-2.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-3.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-4.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-5.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-6.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-7.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-8.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-9.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-10.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-11.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="product__item">
                                        <div className="product__item__pic set-bg" data-setbg="/img/product/product-12.jpg">
                                            <ul className="product__item__pic__hover">
                                                <li><a href="#"><i className="fa fa-heart" /></a></li>
                                                <li><a href="#"><i className="fa fa-retweet" /></a></li>
                                                <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                                            </ul>
                                        </div>
                                        <div className="product__item__text">
                                            <h6><a href="#">Crab Pool Security</a></h6>
                                            <h5>$30.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fa fa-long-arrow-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Product Section End */}

        </Base>
    );
}