import { useEffect } from "react";
import { capitalizeAndRemoveUnderscores } from "../../../util";

const calcDsicount = (price, discount) => {
    discount = discount / 100;
    return price - (price * discount)
}

const makeResponsiveness = (obj) => {
    let responsive = '';
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const element = obj[key];
            if (element && element <= 12 && element > 0) {
                responsive = responsive + `col-${key}-${element} `;
            }
        }
    }
    return responsive;
}

const FeaturedItem = ({ filtredComponents = true, category = 'dried-fruit', bgImg = 'feature-1', discount = 0, heading = 'Raisin’n’nuts', price = 100, showCategory = true, responsive = {
    lg: undefined,
    md: undefined,
    sm: undefined,
} }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    }, []);
    const adjustCategory = capitalizeAndRemoveUnderscores(category);
    const responsiveness = makeResponsiveness(responsive);

    return (
        <div className={`${responsiveness} mix ${filtredComponents && category}`}>

            <div className="product__discount__item">
                <div className="product__discount__item__pic set-bg" data-setbg={`/img/featured/${bgImg}.jpg`}>
                    {discount > 0 && <div className="product__discount__percent">-{discount}%</div>}
                    <ul className="product__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart" /></a></li>
                        <li><a href="#"><i className="fa fa-retweet" /></a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart" /></a></li>
                    </ul>
                </div>
                <div className="product__discount__item__text">
                    {showCategory && <span>{adjustCategory}</span>}
                    <h5><a href="#">{heading}</a></h5>
                    {discount > 0 ? <div className="product__item__price">${calcDsicount(price, discount)}<span>${price}</span></div> : <div className="product__item__price">${price}</div>}
                </div>
            </div>

        </div>
    );
};
export default FeaturedItem;