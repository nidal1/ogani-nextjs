const BannerItem = ({img ="banner-1" , value="customAlt"}) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="banner__pic">
                <img src={`/img/banner/${img}.jpg`} alt={value.toString()} />
            </div>
        </div>
    );
};
export default BannerItem;