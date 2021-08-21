import { useEffect, useState } from "react";

const ProductDetailsText = ({ heading = 'Vetgetable’s Package', stars = '3.5', reviews = '18', price = '50', description = "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.", availability = true, shippingDay = '1', weight = '1.2' }) => {

    const [inputVal, setinputVal] = useState(1);

    const handelleInc = (e) => {
        const newValue = inputVal + 1;
        setinputVal(newValue)
    }

    const handelleDec = (e) => {
        const newValue = inputVal - 1;
        setinputVal(newValue)
    }

    const handelleChange = (e) => {
        setinputVal(e.target.value)
    }

    const starsElements = (() => {
        let starsArr = [];
        stars = stars * 1;
        if (stars % 1 === 0) {
            console.log("Enter First Bloc")
            for (let index = 0; index < stars; index++) {
                starsArr.push(<i key={index} className="fa fa-star" />);
            }
        } else {
            stars = stars - 0.5;
            let i;
            for (let index = 0; index < stars; index++) {
                starsArr.push(<i key={index} className="fa fa-star" />);
                i = index;
            }
            starsArr.push(<i key={++i} className="fa fa-star-half-o" />);
        }
        return starsArr;

    })();
    return (
        <div className="col-lg-6 col-md-6">
            <div className="product__details__text">
                <h3>{heading}</h3>
                <div className="product__details__rating">
                    {starsElements}
                    <span>({reviews} reviews)</span>
                </div>
                <div className="product__details__price">${price}</div>
                <p>{description}</p>
                <div className="product__details__quantity">
                    <div className="quantity">
                        <div className="pro-qty">
                            <span className="dec qtybtn" onClick={ handelleDec }>-</span>
                            <input type="text" defaultValue={1} value={inputVal} onChange={handelleChange}/>
                            <span className="inc qtybtn" onClick={ handelleInc}>+</span>
                        </div>
                    </div>
                </div>
                <a href="#" className="primary-btn">ADD TO CARD</a>
                <a href="#" className="heart-icon"><span className="icon_heart_alt" /></a>
                <ul>
                    <li><b>Availability</b> <span>{availability ? 'In stock' : 'Out of stock'}</span></li>
                    <li><b>Shipping</b> <span>{shippingDay} day shipping. <samp>Free pickup today</samp></span></li>
                    <li><b>Weight</b> <span>{weight} kg</span></li>
                    <li><b>Share on</b>
                        <div className="share">
                            <a href="#"><i className="fa fa-facebook" /></a>
                            <a href="#"><i className="fa fa-twitter" /></a>
                            <a href="#"><i className="fa fa-instagram" /></a>
                            <a href="#"><i className="fa fa-pinterest" /></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default ProductDetailsText;