const Banner = ({value="customAlt"}) => {
    return (
        <>
            {/* Banner Begin */}
            <div className="banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="/img/banner/banner-1.jpg" alt={value.toString()} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="banner__pic">
                                <img src="/img/banner/banner-2.jpg" alt={value.toString()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Banner End */}
        </>
    );
};
export default Banner;