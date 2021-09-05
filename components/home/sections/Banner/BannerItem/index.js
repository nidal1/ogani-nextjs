const BannerItem = ({img ="banner-1" , value="customAlt"}) => {
    return (
        <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="banner__pic">
                <img src={`/img/banner/${img}.jpg`} alt={value.toString()} />
            </div>
        </div>
    );
};
export default BannerItem;