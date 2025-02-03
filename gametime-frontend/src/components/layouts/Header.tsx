import Link from "next/link";
export default function Header() {
    return (
        <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" href="https://gametime.net/" target="_blank">Gametime</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/people">People</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </header>
    );
}