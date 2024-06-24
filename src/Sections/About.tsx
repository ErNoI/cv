import { InfoBox } from "@/components/InfoBox";

const About = () => {
  return (
    <div className="bd-container py-16 ">
      <h1 className="text-5xl text-center font-medium mb-11 ">
        {" "}
        <span className="text-4xl text-action">
          Hello I am <br />
        </span>
      </h1>

      <div className="flex md:flex-row items-center justify-between max-w-screen-md mx-auto ">
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="justify-center text-center">
            {/* <span className="text-2xl text-action">
              Hello I am <br />
            </span> */}
            A Fullstack developer, that is passionate about developing systems
            and creating web interfaces. With years of experience in web design
            and development. When I'm not working, I tend to spend my time going
            to the gym but not in a competitive way. I also enjoy playing
            disc-golf so you might find me around the courses in Gothenburg. The
            weather as all swedes knows is unreliable and when it forces you to
            be at home I usually game with my friends or code my personal
            projects.
          </p>

          <div className="flex flex-row gap-3 mt-16 max-md:flex-col">
            <InfoBox Text="5" subText="Years of Experience"></InfoBox>
            <InfoBox Text="10" subText="Projects"></InfoBox>
            <InfoBox Text="3+" subText="Assignments"></InfoBox>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
