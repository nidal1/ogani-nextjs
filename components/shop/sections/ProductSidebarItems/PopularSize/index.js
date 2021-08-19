import { capitalize } from "../../../../../util";


const PopularSize = ({ label }) => {
    return (
        <div className="sidebar__item__size">
            <label htmlFor={ label }>
                {capitalize(label)}
                <input type="radio" id={ label } />
            </label>
        </div>
    );
};
export default PopularSize;