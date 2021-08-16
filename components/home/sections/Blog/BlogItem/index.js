const BlogItem = ({ img = "blog-1", value = "customAlt", date = "May 4,2019", comments = 5, heading = "Cooking tips make cooking simple", subHeading = "Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat " }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="blog__item">
                <div className="blog__item__pic">
                    <img src={`/img/blog/${img}.jpg`} alt={value.toString()} />
                </div>
                <div className="blog__item__text">
                    <ul>
                        <li><i className="fa fa-calendar-o" /> {date}</li>
                        <li><i className="fa fa-comment-o" />{comments}</li>
                    </ul>
                    <h5><a href="#">{heading}</a></h5>
                    <p>{subHeading}</p>
                </div>
            </div>
        </div>
    );
};
export default BlogItem;