export const About = () => {
  return (
    <section className="about section bd-container py-16">
      <h1 className="text-5xl text-center font-bold mb-11">About</h1>

      <div className="flex md:flex-row items-center justify-between max-w-screen-md mx-auto">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="justify-centert">
            <span className="text-2xl text-action">
              Hello! <br />
            </span>
            A Fullstack developer, that is passionate about developing systems
            and creating web interfaces. With years of experience in web design
            and development. When I'm not working, I tend to spend my time going
            to the gym but not in a competitive way. I also enjoy playing
            disc-golf so you might find me around the courses in Gothenburg. The
            weather as all swedes knows is unreliable and when it forces you to
            be at home I usually game with my friends or code my personal
            projects.
          </p>

          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">05</span>
            <span>Years off Experience</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">3+</span>
            <span>Projects</span>
          </div>

          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">10</span>
            <span>Skills</span>
          </div>
        </div>

        {/* <img
          src="https://images.unsplash.com/photo-1579591919791-0e3737ae3808?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTMwMzY1NzZ8&ixlib=rb-4.0.3&q=85"
          alt="selfimage"
          className="w-64 rounded-md"
        /> */}
      </div>
    </section>
  );
};
