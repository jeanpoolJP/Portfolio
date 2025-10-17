import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Instagram,
  Globe,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      url: "https://github.com/jeanpoolJP",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      url: "https://www.linkedin.com/in/jean-pool-g%C3%B3mez-julcarima-38663b262/",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://www.instagram.com/julcarimajeanpoolgomez/",
    },
    {
      name: "Email",
      icon: <Mail size={20} />,
      url: "mailto:jeanpoolgomezjulcarima@gmail.com",
    },
  ];

  const quickLinks = [
    { name: "Sobre mí", url: "#about" },
    { name: "Habilidades", url: "#skills" },
    { name: "Proyectos", url: "#projects" },
    { name: "Contacto", url: "#contact" },
  ];

  return (
    <footer
      className="text-light py-5 border-top"
      style={{
        backgroundColor: "var(--dark-bg)",
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Columna 1 */}
          <div className="col-md-4">
            <h5
              className="fw-bold text-uppercase mb-3"
              style={{ color: "var(--main-blue)" }}
            >
              Jean Pool
            </h5>
            <p className="text-secondary small mb-3">
              Desarrollador de Software apasionado por crear experiencias web
              interactivas, herramientas inteligentes y soluciones basadas en
              IA.
            </p>
            <div className="d-flex align-items-center text-secondary small">
              <Globe size={16} className="me-2" />
              <span>Ventanilla, Callao - Perú</span>
            </div>
          </div>

          {/* Columna 2 */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Enlaces rápidos</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.url}
                    className="text-secondary text-decoration-none small"
                    onMouseOver={(e) =>
                      (e.target.style.color = "var(--main-blue)")
                    }
                    onMouseOut={(e) => (e.target.style.color = "gray")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Conéctate conmigo</h6>
            <p className="text-secondary small">
              Sígueme en mis redes sociales y mantente al día con mis proyectos.
            </p>
            <div className="d-flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-flex align-items-center justify-content-center rounded-circle border"
                  style={{
                    width: "38px",
                    height: "38px",
                    borderColor: "rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "gray",
                    transition: "all 0.3s ease",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "var(--main-blue)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 0 10px rgba(0,74,173,0.6)";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.05)";
                    e.currentTarget.style.color = "gray";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <hr className="border-secondary opacity-25 mt-5" />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="text-secondary small mb-0">
            © {currentYear} . Todos los derechos reservados.
          </p>
          <p className="text-secondary small mb-0">
            Hecho con <span style={{ color: "var(--main-blue)" }}>❤</span> y
            React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
