function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg">
            <div className="container px-lg-5">
                <a className="navbar-brand" href="./">
                    <img src="/images/logo.jpg" style={{maxWidth : "100%"}} alt="Logo"/>
                </a>
                <div className="text-center col-md-3 offset-2 hidden-xs">
                    <form>
                        <div className="input-group rounded">
                            <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <span className="input-group-text border-0" id="search-addon">
                                <i className="fas fa-search"></i>
                            </span>
                        </div>
                    </form>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

                        <li className="nav-item"><a className="nav-link" href="#!">Login</a></li>
                        <li className="nav-item active"><a className="nav-link" href="#!">Signup</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default Navbar;