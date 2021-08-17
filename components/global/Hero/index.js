import DropDown from "../Header/Dropdown";
import HeroCategories from "../HeroCategories"
import HeroItem from "./HeroItem";

import { useRouter } from "next/dist/client/router";

const Hero = ({numberPhone="+65 11.188.888"}) => {
    
    const pathname = useRouter().pathname;

    return (
        <>
            {/* Hero Section Begin */}
            <section className={`hero ${pathname !== '/' && 'hero-normal'}` }>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <HeroCategories defaultDisplay={pathname === '/' && true}/>
                        </div>
                        <div className="col-lg-9">
                            <div className="hero__search">
                                <div className="hero__search__form">
                                    <form action="#">
                                        <input type="text" placeholder="What do yo u need?" />
                                        <button type="submit" className="site-btn">SEARCH</button>
                                    </form>
                                    <DropDown width="100%">
                                        <a className="list-group-item list-group-item-action media" id="list-home-list" data-toggle="list" role="tab" href="#">
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
                            {pathname === '/' && <HeroItem />}
                        </div>
                    </div>
                </div>
            </section>
            {/* Hero Section End */}
        </>
    );
};
export default Hero;