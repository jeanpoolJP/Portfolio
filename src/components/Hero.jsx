// Path: src/components/Hero.jsx

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        backgroundColor: "#1a1a1a",
        color: "white",
      }}
      className="vh-100 d-flex flex-column justify-content-center align-items-center text-center"
    >
      <h1 className="display-4 fw-bold mb-3">
        👋 Hola, soy <span style={{ color: "#004aad" }}>Jean Pool</span>
      </h1>
      <p className="lead mb-4">Desarrollador web</p>

      <div className="d-flex gap-3">
        <a
          href="#projects"
          className="btn btn-lg text-white"
          style={{ backgroundColor: "#004aad", border: "none" }}
        >
          Ver mis proyectos
        </a>

        <a
          href="/cv-jeanpool.pdf"
          download="JeanPool-CV.pdf"
          className="btn btn-lg"
          style={{
            color: "#004aad",
            border: "2px solid #004aad",
            backgroundColor: "transparent",
          }}
        >
          Descargar CV
        </a>
      </div>
    </section>
  );
}
