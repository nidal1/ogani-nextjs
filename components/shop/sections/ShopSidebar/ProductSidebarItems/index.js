const ProductSidebarItems = ({ children, heading='Popular Size' }) => {
    return (
        <div className="sidebar__item">
            <h4>{ heading }</h4>
            {children}
        </div>
    );
};
export default ProductSidebarItems;