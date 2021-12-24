function Contact() {
  return (
    <section id="contact" className=" contact section">
      <div className="contact__wrapper">
        <header className="font-wide contact__header">
          Wanna work together?
        </header>
        <div className="contact__container">
          <p className="font-content contact__content">
            I am currently looking for a full-time position, feel free to
            contact me and I'll get back to you as soon as possible!
          </p>
          <div className="font-wide contact__btns">
            <a
              className="contact__btn"
              href="mailto: https://jeffrey24493@gmail.com"
            >
              <div className="contact__btn-text">message me</div>
            </a>
            <a
              className="contact__btn contact__cv"
              download
              href="https://drive.google.com/file/d/1IjNxVKA6Zwn6M_qpwbszJ2jToxNNkXgk/view?usp=sharing"
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
