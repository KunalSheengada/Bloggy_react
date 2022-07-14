import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav className="Navbaritems">
                <h1 className="navbar-logo">
                    <i className="fa-solid fa-blog"></i>BLOGGY
                </h1>
                <div className="nav-menu">
                    <i
                        className="fas fa-bars"
                    ></i>
                </div>
                    <button className="btn btn-outline-success" id="add">
                        Add
                    </button>
                    <button className="btn btn-outline-success" id="add">
                        Login
                    </button>
                    <Link to='/Signup'><button className="btn btn-outline-success" id="add">
                        Sign up
                    </button></Link>
                <form className="d-flex" role="search">
                    <input
                        className="form-control me-2"
                        type="text"
                        id="search"
                        placeholder="Search"
                        aria-label="Search"
                    />
                    <button
                        type="button"
                        className="btn btn-outline-success nav-links"
                    >
                        Search
                    </button>
                </form>
            </nav>
    )
}

export default Navbar;