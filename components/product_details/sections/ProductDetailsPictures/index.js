import OwlCarousel from '../../../global/OwlCarousel';

import { useEffect } from 'react';

const ProductDetailsPictures = ({ value = "customAlt", imgGalery = [
    {
        bigImg: 'product-details-2',
        smallImg: 'thumb-1'
    },
    {
        bigImg: 'product-details-3',
        smallImg: 'thumb-2'
    },
    {
        bigImg: 'product-details-5',
        smallImg: 'thumb-3'
    },
    {
        bigImg: 'product-details-4',
        smallImg: 'thumb-4'
    }
] }) => {

    useEffect(() => {
        /*------------------
            Single Product
        --------------------*/
        $('.product__details__pic__slider img').on('click', function () {

            var imgurl = $(this).data('imgbigurl');
            var bigImg = $('.product__details__pic__item--large').attr('src');
            if (imgurl != bigImg) {
                $('.product__details__pic__item--large').attr({
                    src: imgurl
                });
            }
        });
    });


    const SliderItems = imgGalery.map((el,i) => {
        return (
            <img key={i} data-imgbigurl={`/img/product/details/${el.bigImg}.jpg`} src={`/img/product/details/${el.smallImg}.jpg`} alt={value.toString()} />
        );
    })

    return (
        <div className="col-lg-6 col-md-6">
            <div className="product__details__pic">
                <div className="product__details__pic__item">
                    <img className="product__details__pic__item--large" src="/img/product/details/product-details-1.jpg" alt={value.toString()} />
                </div>
                <OwlCarousel
                    loop={true}
                    margin={20}
                    items={4}
                    dots={true}
                    autoHeight={false}
                    elementByClassName='product__details__pic__slider'
                >
                    { SliderItems }
                </OwlCarousel>
            </div>
        </div>
    );
};
export default ProductDetailsPictures;