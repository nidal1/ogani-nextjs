import { capitalizeAndRemoveUnderscores } from "../../../../../util";

const calcDsicount = (price, discount) => {
    discount = discount / 100;
    return price - (price * discount)
}

const FeaturedItem = ({ filtredComponents = true, category = 'dried-fruit', bgImg = 'feature-1', discount = 0, heading = 'Raisin’n’nuts', price = 100, showCategory = true }) => {

    const adjustCategory = capitalizeAndRemoveUnderscores(category);


    return (
        <div className={`col-lg-3 col-md-4 col-sm-6 mix ${filtredComponents && category}`}>

            <div className="product__discount__item">
                <div className="product__discount__item__pic set-bg" data-setbg={`/img/featured/${bgImg}.jpg`}>
                    { discount > 0 && <div className="product__discount__percent">-{ discount }%</div>}
                    <ul className="product__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                </div>
                <div className="product__discount__item__text">
                    {showCategory && <span>{ adjustCategory }</span>}
                    <h5><a href="#">{ heading }</a></h5>
                    { discount > 0 ? <div className="product__item__price">${calcDsicount(price, discount)}<span>${ price }</span></div> : <div className="product__item__price">${ price }</div>}
                </div>
            </div>

        </div>
    );
};
export default FeaturedItem;