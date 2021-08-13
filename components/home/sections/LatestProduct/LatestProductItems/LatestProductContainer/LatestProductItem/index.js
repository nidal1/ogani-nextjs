const LatestProductItem = ({ href="#", img="lp-1", value="customAlt", heading="Crab Pool Security", price=0}) => {
    return (
        <a href={href} className="latest-product__item">
            <div className="latest-product__item__pic">
                <img src={`/img/latest-product/${img}.jpg`} alt={value.toString()} />
            </div>
            <div className="latest-product__item__text">
                <h6>{heading}</h6>
                <span>${price}</span>
            </div>
        </a>
    );
};
export default LatestProductItem;