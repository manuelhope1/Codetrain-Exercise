
function Header() {
    return (
    <nav className="navbar navbar-default navbar-home">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">PIZZAMANIA </a>
        </div>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#">Home</a></li>
            <li><a href="#">About Pizza</a></li>
            <li><a href="#">Pizza Type</a></li>
        </ul>
    </nav>
    );
}

export default Header