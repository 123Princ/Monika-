export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
  <div className="hero--section--content--box">
    <div className="hero--section--content">
      <p className="section--title">Hey, I'm Monika</p>
      <h1 className="hero--section--title">
        <span className="hero--section-title--color">GNM Nursing</span>{" "}
        <br />
        Student
      </h1>
      <p className="hero--section-description">
        I am Monika, currently in my final year of GNM Nursing.
      </p>
    </div>
    <button className="btn btn-primary">Get In Touch</button>
  </div>

      <div className="hero--section--img">
        <img src="./img/monikalogo.jpeg" alt="Hero Section" />
      </div>
    </section>
  );
}
