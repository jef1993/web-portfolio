function Contact() {
  return (
    <section id="contact" className=" contact section">
      <div className="contact__wrapper">
        <header className="font-wide contact__header">
          Wanna work together?
        </header>
        <div className="contact__container">
          <p className="font-content contact__content">
            I am currently working as full-time Frontend developer at OPOP
            media.
          </p>
          <div className="font-wide contact__btns">
            <a
              className="contact__btn"
              href="mailto: https://jeffrey24493@gmail.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="contact__btn-text">message me</div>
            </a>
            <a
              className="contact__btn contact__cv"
              download
              href="https://drive.google.com/file/d/1IjNxVKA6Zwn6M_qpwbszJ2jToxNNkXgk/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="contact__btn-text">download cv</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
