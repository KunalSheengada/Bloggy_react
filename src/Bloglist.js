import { Link } from "react-router-dom";
function Bloglist({ blogs}) {
    return (
        <>
            <div className="container blogs">
                <div className="blog row">
                    {blogs && blogs.map((blog, index) => (
                        <div className='blogimg'>
                            <img className="img img-responsive" src={blog.image_url} alt='blog' />
                                <h5 className="card-title">{blog.title}</h5>
                                <div className="card-descp card-title">{blog.descp}</div>
                                <Link className ="read" to={`/Blogdetail/${blog.id}`}>
                                <button className="btn btn-outline-success mb-4"  >
                                 Read More 
                                </button>
                                </Link>
                        </div>

                    ))}
                </div>
            </div>
        </>
    );
}
export default Bloglist;