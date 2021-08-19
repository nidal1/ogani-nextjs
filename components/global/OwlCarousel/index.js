import { useEffect } from "react";

const OwlCarousel = ({children, elementByClassName, loop, margin = 0, items, dots = false, nav = false, navText= undefined, smartSpeed = 1000, autoHeight = false, autoplay = true, responsive = {
    0: undefined,
    320:undefined,
    480: undefined,
    768: undefined,
    992: undefined
}
}) => {
    useEffect(() => {
        const cleanup = $(`.${elementByClassName}`).owlCarousel({
            loop,
            margin,
            items,
            dots,
            nav,
            navText,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            smartSpeed,
            autoHeight,
            autoplay,
            responsive: {
    
                0: {
                    items: responsive[0],
                },
                320: {
                    items: responsive[320],
                },
                480: {
                    items: responsive[480],
                },
    
                768: {
                    items: responsive[768],
                },
    
                992: {
                    items: responsive[992],
                }
            }
        });
        return () => {
            cleanup
        }
    })
    return (
        <div className={`${elementByClassName} owl-carousel`}>
            { children }
        </div>
    );
};
export default OwlCarousel;