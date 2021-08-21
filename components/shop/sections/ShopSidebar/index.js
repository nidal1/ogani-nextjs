import HeroCategoriesItem from "../../../global/HeroCategories/HeroCategoriesItem";
import LatestProductItems from "../../../global/LatestProduct/LatestProductItems";
import ProductSidebarItems from "./ProductSidebarItems";
import PriceRange from "./ProductSidebarItems/PriceRange";
import PopularSize from './ProductSidebarItems/PopularSize'

const ShopSidebar = (params) => {
    return (
        <div className="col-lg-3 col-md-5 sidebar">
            <ProductSidebarItems heading='Department'>
                <ul>
                    <HeroCategoriesItem />
                    <HeroCategoriesItem />
                    <HeroCategoriesItem />
                    <HeroCategoriesItem />
                    <HeroCategoriesItem />
                </ul>
            </ProductSidebarItems>
            <ProductSidebarItems heading='Price'>
                <PriceRange currency='Dh' />
            </ProductSidebarItems>
            <ProductSidebarItems heading='Popular Size'>
                <PopularSize label='large' />
                <PopularSize label='medium' />
                <PopularSize label='small' />
                <PopularSize label='tiny' />
            </ProductSidebarItems>
            <LatestProductItems responsive={false} />

        </div>
    );
};
export default ShopSidebar;