import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jeanpool",
        "template_7asphsu",
        form.current,
        "eOeVXMTwjkqnNAuOZ",
      )
      .then(
        () => {
          alert("✅ Tu mensaje fue enviado con éxito!");
          form.current.reset();
        },
        (error) => {
          alert("❌ Ocurrió un error al enviar el mensaje.");
          console.log(error);
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-5 text-light"
      style={{ backgroundColor: "var(--dark-bg)" }}
    >
      <div className="container text-center">
        {/* 🔹 Título principal */}
        <h2
          className="fw-bold mb-4"
          style={{
            color: "var(--main-blue)",
            letterSpacing: "1px",
            textTransform: "none", // 👈 antes era uppercase
          }}
        >
          Contáctame
        </h2>

        {/* 📨 FORMULARIO */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="col-md-6 mx-auto mb-5 p-4 rounded-4"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          }}
        >
          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Nombre</label>
            <input
              type="text"
              name="user_name"
              className="form-control bg-transparent text-light border border-secondary"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label fw-semibold">Correo</label>
            <input
              type="email"
              name="user_email"
              className="form-control bg-transparent text-light border border-secondary"
              placeholder="tunombre@email.com"
              required
            />
          </div>

          <div className="mb-4 text-start">
            <label className="form-label fw-semibold">Mensaje</label>
            <textarea
              name="message"
              className="form-control bg-transparent text-light border border-secondary"
              rows="4"
              placeholder="Tu mensaje..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-lg w-100 fw-semibold"
            style={{
              backgroundColor: "var(--main-blue)",
              color: "white",
              border: "none",
              transition: "0.3s",
              borderRadius: "10px",
            }}
            onMouseOver={(e) => (e.target.style.opacity = "0.85")}
            onMouseOut={(e) => (e.target.style.opacity = "1")}
          >
            <FaEnvelope className="me-2" />
            Enviar mensaje
          </button>
        </form>

        {/* 📱 DATOS DE CONTACTO */}
        <div className="mt-5">
          <h5
            className="fw-bold mb-3"
            style={{ color: "var(--main-blue)", textTransform: "none" }} // 👈 también corregido
          >
            o contáctame directamente:
          </h5>

          <div
            className="d-flex flex-column align-items-center gap-3"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: "12px",
              padding: "20px",
              border: "1px solid rgba(255,255,255,0.05)",
              width: "fit-content",
              margin: "0 auto",
            }}
          >
            <div className="d-flex align-items-center">
              <FaPhoneAlt
                className="me-2"
                style={{ color: "var(--main-blue)" }}
              />
              <span className="fw-semibold">+51 971 989 294</span>
            </div>
            <div className="d-flex align-items-center">
              <FaPhoneAlt
                className="me-2"
                style={{ color: "var(--main-blue)" }}
              />
              <span className="fw-semibold">+51 943 664 207</span>
            </div>

            <a
              href="https://wa.me/51971989294"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light mt-3 px-4 py-2 fw-semibold"
              style={{
                borderColor: "var(--main-blue)",
                color: "#25D366",
                borderRadius: "10px",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = "rgba(0,74,173,0.2)")
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = "transparent")
              }
            >
              <FaWhatsapp className="me-2" />
              Enviar mensaje por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
