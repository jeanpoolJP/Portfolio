// Path: src/components/Skills.jsx

export default function Skills() {
  const skills = [
    { name: "HTML", icon: "fa-brands fa-html5" },
    { name: "CSS", icon: "fa-brands fa-css3-alt" },
    { name: "JavaScript", icon: "fa-brands fa-js" },
    { name: "PHP", icon: "fa-brands fa-php" },
    { name: "Laravel", icon: "fa-brands fa-laravel" },
    { name: "MySQL", icon: "fa-solid fa-database" },
    { name: "MongoDB", icon: "fa-solid fa-leaf" },
    { name: "Git", icon: "fa-brands fa-git-alt" },
    { name: "Bootstrap", icon: "fa-brands fa-bootstrap" },
    { name: "Docker", icon: "fa-brands fa-docker" },
    { name: "Python", icon: "fa-brands fa-python" },
    { name: "Node.js", icon: "fa-brands fa-node-js" },
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
