import { useEffect } from "react";
import { capitalizeAndRemoveUnderscores } from "../../../../../util";

const FeaturedControls = ({ featuredCategories }) => {

    const fc = featuredCategories?.map((cur, i) => {
        const fcct = capitalizeAndRemoveUnderscores(cur);
        return <li key={i} data-filter={`.${cur}`}>{fcct}</li>;
    });

    return (
        <div className="featured__controls">
            <ul>
                <li className="active" data-filter="*">All</li>
                {fc}
            </ul>
        </div>
    );
};


export default FeaturedControls;