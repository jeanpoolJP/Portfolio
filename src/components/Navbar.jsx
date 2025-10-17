export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top glass-effect">
      <div className="container">
        <a className="navbar-brand fw-bold text-gradient" href="#home">
          &lt;JeanPool /&gt;
        </a>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-1">
              <a
                className="nav-link link-underline position-relative"
                href="#about"
              >
                <i className="fas fa-user me-2"></i>
                Sobre mí
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                className="nav-link link-underline position-relative"
                href="#skills"
              >
                <i className="fas fa-code me-2"></i>
                Habilidades
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                className="nav-link link-underline position-relative"
                href="#projects"
              >
                <i className="fas fa-briefcase me-2"></i>
                Proyectos
              </a>
            </li>
            <li className="nav-item mx-1">
              <a
                className="nav-link link-underline position-relative"
                href="#contact"
              >
                <i className="fas fa-envelope me-2"></i>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
