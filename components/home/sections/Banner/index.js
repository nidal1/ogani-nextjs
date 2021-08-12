import BannerItem from "./BannerItem"

const Banner = ({value="customAlt"}) => {
    return (
        <>
            {/* Banner Begin */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <BannerItem />
                        <BannerItem />
                        <BannerItem />
                    </div>
                </div>
            </div>
            {/* Banner End */}
        </>
    );
};
export default Banner;