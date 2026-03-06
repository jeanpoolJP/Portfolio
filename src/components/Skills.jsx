export default function Skills() {
  const skills = [
    // Frontend moderno
    { name: "React", icon: "fa-brands fa-react" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },

    // Backend
    { name: "Node.js", icon: "fa-brands fa-node-js" },
    { name: "Laravel", icon: "fa-brands fa-laravel" },

    // Bases de datos
    { name: "MySQL", icon: "fa-solid fa-database" },
    { name: "MongoDB", icon: "fa-solid fa-leaf" },

    // Herramientas y control de versiones
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "Docker", icon: "fa-brands fa-docker" },

    // Lenguajes adicionales y diseño
    { name: "Python", icon: "fa-brands fa-python" },
  ];

  return (
    <section
      id="skills"
      className="py-5"
      style={{ backgroundColor: "var(--dark-bg)", color: "white" }}
    >
      <div className="container text-center">
        <h2 className="fw-bold mb-5" style={{ color: "var(--main-blue)" }}>
          Habilidades
        </h2>

        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-md-3 col-lg-2">
              <div className="skill-card p-4 rounded-4 shadow-sm">
                <i className={`${skill.icon} skill-icon mb-3`}></i>
                <p className="fw-semibold m-0">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
