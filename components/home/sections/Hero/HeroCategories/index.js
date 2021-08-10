import HeroCategoriesItem from './HeroCategoriesItem';
const HeroCategories = (params) => {
    return (
        <div className="hero__categories">
            <div className="hero__categories__all">
                <i className="fa fa-bars" />
                <span>All departments</span>
            </div>
            <ul>
                <HeroCategoriesItem />
                <HeroCategoriesItem />
                <HeroCategoriesItem />
                <HeroCategoriesItem />
                <HeroCategoriesItem />
                <HeroCategoriesItem />
                <HeroCategoriesItem />
                
            </ul>
        </div>
    );
};
export default HeroCategories;