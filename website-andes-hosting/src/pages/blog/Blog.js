
import NavBar from "../../components/navbar/NavBar"
import './Blog.scss'
import Footer from "../../components/footer/Footer"
import BlogGroup from "../../components/blogGroup/BlogGroup"
import SidebarNet from "../../components/sidebarNet/SidebarNet"

const Blog = () => {

    return (
        <div className="blog">
            <NavBar/>
            <div className="container-blog-group">
                <BlogGroup/>
            </div>
            <Footer/>
            <SidebarNet></SidebarNet>
        </div>

    )
}

export default Blog