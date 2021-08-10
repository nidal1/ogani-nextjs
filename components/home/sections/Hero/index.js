import DropDown from "../../../global/Header/Dropdown";
import HeroCategories from "./HeroCategories"

const Hero = ({numberPhone="+65 11.188.888"}) => {
    return (
        <>
            {/* Hero Section Begin */}
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <HeroCategories />
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                    <DropDown width="100%">
                                        <a lassName="list-group-item list-group-item-action media" id="list-home-list" data-toggle="list" role="tab" href="#">
                                            Home
                                        </a>
                                    </DropDown>

                                </div>

                                <div className="hero__search__phone">
                                    <div className="hero__search__phone__icon">
                                        <i className="fa fa-phone" />
                                    </div>
                                    <div className="hero__search__phone__text">
                                        <h5>{numberPhone}</h5>
                                        <span>support 24/7 time</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hero__item set-bg" data-setbg="/img/hero/banner.jpg">
                                <div className="hero__text">
                                    <span>FRUIT FRESH</span>
                                    <h2>Vegetable <br />100% Organic</h2>
                                    <p>Free Pickup and Delivery Available</p>
                                    <a href="#" className="primary-btn">SHOP NOW</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}
        </>
    );
};
export default Hero;