import { useEffect } from "react";

const PriceRange = ({minPrice=0, maxPrice=100, currency= '$'}) => {
    useEffect(() => {
        /*-----------------------
            Price Range Slider
        ------------------------ */
        var rangeSlider = $(".price-range"),
            minamount = $("#minamount"),
            maxamount = $("#maxamount"),
            minPrice = rangeSlider.data('min'),
            maxPrice = rangeSlider.data('max');
        rangeSlider.slider({
            range: true,
            min: minPrice,
            max: maxPrice,
            values: [minPrice, maxPrice],
            slide: function (event, ui) {
                minamount.val(`${currency}` + ui.values[0]);
                maxamount.val(`${currency}` + ui.values[1]);
            }
        });
        minamount.val(`${currency}` + rangeSlider.slider("values", 0));
        maxamount.val(`${currency}` + rangeSlider.slider("values", 1));
    });
    return (
        <div className="price-range-wrap">
            <div className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content" data-min={minPrice} data-max={maxPrice}>
                <div className="ui-slider-range ui-corner-all ui-widget-header" />
                <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
                <span tabIndex={0} className="ui-slider-handle ui-corner-all ui-state-default" />
            </div>
            <div className="range-slider">
                <div className="price-input">
                    <input type="text" id="minamount" />
                    <input type="text" id="maxamount" />
                </div>
            </div>
        </div>
    );
};
export default PriceRange;