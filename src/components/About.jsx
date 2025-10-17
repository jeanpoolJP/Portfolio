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
              Soy estudiante de <strong>Desarrollo de Software</strong> en{" "}
              <strong>SENATI</strong>, apasionado por la tecnología, la
              innovación y el aprendizaje constante. Cuento con sólidos
              conocimientos en <strong>programación</strong>,{" "}
              <strong>bases de datos</strong>, <strong>desarrollo web</strong> y{" "}
              <strong>computación</strong>.
            </p>

            <p className="lead mb-4">
              Poseo un nivel <strong>intermedio de inglés</strong> y actualmente
              llevo <strong>1 año de prácticas profesionales</strong>, donde he
              fortalecido mis habilidades técnicas y mi capacidad para trabajar
              en equipo dentro de entornos reales de desarrollo.
            </p>

            <p className="lead">
              Mi objetivo es seguir creciendo como profesional, aportando mis
              conocimientos, compromiso y pasión por la tecnología al desarrollo
              de proyectos innovadores y de alto impacto.
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
