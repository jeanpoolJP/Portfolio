export default function About() {
  return (
    <section
      id="about"
      className="py-5"
      style={{ backgroundColor: "var(--dark-bg)", color: "white" }}
    >
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{ color: "var(--main-blue)" }}
        >
          Sobre mí
        </h2>

        <div className="row align-items-center justify-content-center">
          {/* Imagen */}
          <div
            className="col-md-4 mb-5 mb-md-0 d-flex justify-content-center"
            data-aos="fade-right"
          >
            <img src="iconopc.png" alt="Perfil" className="about-image" />
          </div>

          {/* Texto */}
          <div className="col-md-6 ps-md-5" data-aos="fade-left">
            <p className="lead mb-4">
              Soy <strong>egresado de Desarrollo de Software</strong>, con
              formación en desarrollo de aplicaciones web, programación, bases
              de datos y desarrollo de soluciones tecnológicas. Me caracteriza
              el interés por crear software funcional, escalable y con buenas
              prácticas de desarrollo.
            </p>

            <p className="lead mb-4">
              Cuento con{" "}
              <strong>1 año de experiencia en prácticas profesionales</strong>,
              donde participé en el desarrollo y mantenimiento de aplicaciones,
              fortaleciendo mis habilidades técnicas, la resolución de problemas
              y el trabajo colaborativo dentro de equipos de desarrollo. Además,
              poseo un <strong>nivel intermedio de inglés</strong>, que me
              permite comprender documentación técnica y continuar aprendiendo
              nuevas tecnologías.
            </p>

            <p className="lead">
              Mi objetivo es desarrollarme como{" "}
              <strong>Desarrollador de Software</strong>, aportando soluciones
              innovadoras, aprendiendo constantemente y contribuyendo al éxito
              de cada proyecto mediante el compromiso, la responsabilidad y la
              mejora continua.
            </p>

            <a
              href="#contact"
              className="btn btn-lg mt-3 text-white"
              style={{
                backgroundColor: "var(--main-blue)",
                border: "none",
                transition: "all 0.3s ease",
              }}
              onMouseOver={(e) => (e.target.style.opacity = "0.85")}
              onMouseOut={(e) => (e.target.style.opacity = "1")}
            >
              Contáctame
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
