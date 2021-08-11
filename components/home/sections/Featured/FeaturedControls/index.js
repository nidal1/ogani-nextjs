const makeFeaturedCategoriesControlsTitle = (fcct) => {
    // Upercase
    fcct = fcct.toString().charAt(0).toUpperCase() + fcct.slice(1);
    //Sreach if it have an -
    if (fcct.search('-') !== -1) {
        // Replace - with ' ' 
        return fcct.replace(/-/g, ' ');
    }
    // Return the value
    return fcct;
}

const FeaturedControls = ({featuredCategories=['oranges','fresh-meat','vegetables','fast-food',]}) => {

    const fc = featuredCategories.map((cur,i) => {
        const fcct = makeFeaturedCategoriesControlsTitle(cur);
        return <li key={i} data-filter={`.${cur}`}>{fcct}</li>;
    });
    
    return (
        <div className="featured__controls">
            <ul>

                <li className="active" data-filter="*">All</li>
                { fc }
            </ul>
        </div>
    );
};


export default FeaturedControls;