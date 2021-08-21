import FeaturedItem from '../../../global/FeaturedItem';
import OwlCarousel from '../../../global/OwlCarousel';

const ShopProductDsicount = (params) => {
    return (
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
                        320: 1,
                        480: 2,
                        768: 2,
                        992: 3
                    }}>
                    <FeaturedItem
                        filtredComponents={false}
                        discount={20}
                        price={30}
                        responsive={{
                            lg: 4
                        }
                        } />
                    <FeaturedItem
                        filtredComponents={false}
                        discount={20}
                        price={30}
                        responsive={{
                            lg: 4
                        }
                        } />
                    <FeaturedItem
                        filtredComponents={false}
                        discount={20}
                        price={30}
                        responsive={{
                            lg: 4
                        }
                        } />
                    <FeaturedItem
                        filtredComponents={false}
                        discount={20}
                        price={30}
                        responsive={{
                            lg: 4
                        }
                        } />
                    <FeaturedItem
                        filtredComponents={false}
                        discount={20}
                        price={30}
                        responsive={{
                            lg: 4
                        }
                        } />
                </OwlCarousel>
            </div>
        </div>
    );
};
export default ShopProductDsicount