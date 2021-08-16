import BlogItem from "./BlogItem"

const Blog = ({ value = "customAlt" }) => {
    return (
        <>
            {/* Blog Section Begin */}
            <section className="from-blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title from-blog__title">
                                <h2>From The Blog</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <BlogItem />
                        <BlogItem />
                        <BlogItem />
                    </div>
                </div>
            </section>
            {/* Blog Section End */}
        </>
    );
};
export default Blog;