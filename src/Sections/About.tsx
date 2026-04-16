const About = () => {
  return (
    <div id="about" className="bd-container py-16">
      <h1 className="mb-11 text-center text-5xl font-medium">
        <span className="text-4xl text-action">
          Hello I am <br />
        </span>
      </h1>

      <div className="mx-auto flex min-h-48 max-w-screen-md items-center justify-between md:flex-row">
        <p className="max-sm:mx-6">
          A Fullstack developer, that is passionate about developing systems and
          creating web interfaces. With years of experience in web design and
          development. When I'm not working, I tend to spend my time going to
          the gym but not in a competitive way. I also enjoy playing disc-golf
          so you might find me around the courses in Gothenburg. The weather as
          all swedes knows is unreliable and when it forces you to be at home I
          usually game with my friends or code my personal projects.
        </p>
      </div>
    </div>
  );
};

export default About;
