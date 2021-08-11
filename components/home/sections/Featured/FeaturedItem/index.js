const FeaturedItem = ({ featuredCategories = ['oranges', 'fresh-meat'], bgImg = 'feature-1', heading = 'Crab Pool Security', price = 0 }) => {
    const fc = featuredCategories.reduce((pre, cur) => {
        return `${pre} ${cur}`;
    });

    return (
        <div className={`col-lg-3 col-md-4 col-sm-6 mix ${fc}`}>
            <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg={`/img/featured/${bgImg}.jpg`}>
                    <ul className="featured__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                </div>
                <div className="featured__item__text">
                    <h6><a href="#">{heading}</a></h6>
                    <h5>${price}</h5>
                </div>
            </div>
        </div>
    );
};
export default FeaturedItem;