import HeroCategoriesItem from './HeroCategoriesItem';
const HeroCategories = ({ defaultDisplay = true}) => {
    return (
        <div className="hero__categories">
            <div className="hero__categories__all">
                <i className="fa fa-bars" />
                <span>All departments</span>
            </div>
            <ul style={{display:defaultDisplay? '' : 'none'}}>
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