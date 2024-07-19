import './BlogContent.scss'

const BlogContent = ({ title, date, image, content }) => {

    return (
        <div className="blog-article my-4 d-flex flex-column align-items-center">
            <div className="blog-header">
                <h1 className="blog-title text-center" style={{fontSize: '48px'}}>{title}</h1>
                <p className="blog-date text-white text-center">{date}</p>
            </div>
            <div className="blog-image-container my-4 d-flex justify-content-center ">
                <img src={image} alt={title} className="blog-image rounded border img-thumbnail w-75" />
            </div>
            <div className="blog-content m-4 w-75">
                {content}
            </div>
        </div>
    );
};

export default BlogContent