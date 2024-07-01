const BlogContent = ({ title, date, image, content }) => {

    return (
        <div className="blog-article my-4 d-flex flex-column align-items-center">
            <div className="blog-header">
                <h1 className="blog-title">{title}</h1>
                <p className="text-muted blog-date">{date}</p>
            </div>
            <div className="blog-image-container my-4 ">
                <img src={image} alt={title} className="blog-image rounded" />
            </div>
            <div className="blog-content m-4 w-75">
                {content}
            </div>
        </div>
    );
};

export default BlogContent