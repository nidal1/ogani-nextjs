import Link from 'next/link';
import { useEffect } from 'react';


const CategoriesItem = ({ bgImg = "cat-1", heading = "Fresh Fruit" }) => {
    useEffect(() => {
        $('.set-bg').each(function () {
            var bg = $(this).data('setbg');
            $(this).css('background-image', 'url(' + bg + ')');
        });
    });

    return (
        <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg={`/img/featured/${bgImg}.jpg`}>
                <h5><Link href="#">{heading}</Link></h5>
            </div>
        </div>
    );
};
export default CategoriesItem;