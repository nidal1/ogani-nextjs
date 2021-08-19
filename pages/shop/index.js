import Base from '../../components/global/Base';
import { useEffect } from 'react';
import ProductSidebarItems from '../../components/shop/sections/ProductSidebarItems';
import HeroCategoriesItem from '../../components/global/HeroCategories/HeroCategoriesItem';
import PriceRange from '../../components/shop/sections/ProductSidebarItems/PriceRange';
import PopularSize from '../../components/shop/sections/ProductSidebarItems/PopularSize';
import LatestProductItems from '../../components/global/LatestProduct/LatestProductItems';
import OwlCarousel from '../../components/global/OwlCarousel';

export default function Shop({ value = "customAlt" }) {

    useEffect(() => {

        /*--------------------------
            Select
        ----------------------------*/
        $("select").niceSelect();


    });
    return (
        <Base>


            {/* Product Section Begin */}
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <div className="sidebar">
                                <ProductSidebarItems heading='Department'>
                                    <ul>
                                        <HeroCategoriesItem />
                                        <HeroCategoriesItem />
                                        <HeroCategoriesItem />
                                        <HeroCategoriesItem />
                                        <HeroCategoriesItem />
                                    </ul>
                                </ProductSidebarItems>
                                <ProductSidebarItems heading='Price'>
                                    <PriceRange currency='Dh' />
                                </ProductSidebarItems>

                                <ProductSidebarItems heading='Popular Size'>
                                    <PopularSize label='large' />
                                    <PopularSize label='medium' />
                                    <PopularSize label='small' />
                                    <PopularSize label='tiny' />
                                </ProductSidebarItems>

                                <LatestProductItems responsive={false} />

                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                <div className="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div className="row">
                                    <OwlCarousel 
                                        elementByClassName='product__discount__slider'
                                        loop={1}
                                        items={3}
                                        dots={true}
                                        responsive={{
                                            320:1,
                                            480:2,
                                            768:2,
                                            992:3
                                        }}>
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
                                    </OwlCarousel>
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