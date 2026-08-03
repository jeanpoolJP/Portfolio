// Path: src/components/Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      title: "JP Tech – E-commerce de Tecnología",
      desc: "E-commerce de tecnología desarrollado en Laravel con simulación de compras en línea. Los usuarios disponen de un saldo virtual para adquirir productos, gestionar su carrito y generar boletas PDF. Incluye panel de administración, reportes e historial de pedidos.",
      img: "project-01.png",
      link: "https://github.com/jeanpoolJP/jptech",
    },
    {
      title: "Sistema Web Institucional - Colegio Harry Sullivan",
      desc: "Aplicación web desarrollada para la gestión del sitio institucional del Colegio Harry Sullivan. Incluye un panel administrativo para actualizar el contenido del sitio de forma dinámica. Desarrollada con Next.js, TypeScript, Tailwind CSS, shadcn/ui y MongoDB Atlas, utilizando una arquitectura modular y por capas.",
      img: "project-02.png",
      github: "https://github.com/jeanpoolJP/colegio-harry-sullivan",
      demo: "https://colegio-harry-sullivan.vercel.app/",
    },
    {
      title: "JP Store - Sistema POS de Ventas ",
      desc: "Sistema web de registro y gestión de ventas desarrollado con JavaScript full stack utilizando Node.js, Express y MongoDB. Permite registrar ventas, administrar productos, clientes y generar reportes en tiempo real. Incluye autenticación de usuarios con roles (Administrador y Vendedor).",
      img: "project-03.png",
      link: "https://github.com/jeanpoolJP/sistema-ventas.git",
    },
  ];

  return (
    <section
      id="projects"
      className="py-5"
      style={{ backgroundColor: "var(--dark-bg)", color: "white" }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: "var(--main-blue)" }}>
          Proyectos
        </h2>

        {/* 🧩 Tarjetas de proyectos */}
        <div className="row g-4 mb-5">
          {projects.map((p, i) => (
            <div key={i} className="col-md-4" data-aos="fade-up">
              <div
                className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(6px)",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <img
                  src={p.img}
                  className="card-img-top"
                  alt={p.title}
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5
                      className="fw-bold"
                      style={{ color: "var(--main-blue)" }}
                    >
                      {p.title}
                    </h5>
                    <p className="text-light opacity-75">{p.desc}</p>
                  </div>

                  <div className="mt-3">
                    <div className="d-flex gap-2">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`btn text-white fw-semibold d-flex align-items-center justify-content-center gap-2 ${
                          p.demo ? "flex-fill" : "w-100"
                        }`}
                        style={{
                          backgroundColor: "var(--main-blue)",
                          border: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseOver={(e) =>
                          (e.currentTarget.style.opacity = "0.85")
                        }
                        onMouseOut={(e) =>
                          (e.currentTarget.style.opacity = "1")
                        }
                      >
                        <FaGithub size={20} />
                        GitHub
                      </a>

                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-light fw-semibold d-flex align-items-center justify-content-center gap-2 flex-fill"
                          style={{
                            transition: "all 0.3s ease",
                          }}
                          onMouseOver={(e) =>
                            (e.currentTarget.style.opacity = "0.85")
                          }
                          onMouseOut={(e) =>
                            (e.currentTarget.style.opacity = "1")
                          }
                        >
                          <FaExternalLinkAlt size={16} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🌐 Enlace a perfil de GitHub */}
        <div
          className="p-4 rounded-4 mx-auto d-flex flex-column align-items-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
            maxWidth: "500px",
          }}
          data-aos="fade-up"
        >
          <FaGithub size={40} color="#fff" className="mb-3" />
          <h5 className="fw-bold mb-2">Ver más proyectos en GitHub</h5>
          <p className="text-light opacity-75 mb-3">
            Explora todos mis repositorios, código fuente y proyectos
            personales.
          </p>
          <a
            href="https://github.com/jeanpoolJP"
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white fw-semibold d-flex align-items-center justify-content-center gap-2 px-4"
            style={{
              backgroundColor: "var(--main-blue)",
              borderRadius: "10px",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.85")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            <FaGithub size={18} />
            Ir a mi perfil de GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
