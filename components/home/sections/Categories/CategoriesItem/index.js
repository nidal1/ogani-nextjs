import Link from 'next/link';

const CategoriesItem = ({ bgImg ="cat-1", heading="Fresh Fruit"}) => {
    return (
        <div className="col-lg-3">
            <div className="categories__item set-bg" data-setbg={`/img/categories/${bgImg}.jpg`}>
                <h5><Link href="#">{heading}</Link></h5>
            </div>
        </div>
    );
};
export default CategoriesItem;