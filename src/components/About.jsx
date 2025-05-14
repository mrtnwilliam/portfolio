import aboutSVG from "../assets/about.svg";
import SectionTitle from "./SectionTitle";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSVG} className="w-full h-64" />
        <article>
          <SectionTitle text="about me" />
          <p className="text-slate-600 mt-8 leading-loose">
            I am an enthusiastic and motivated React Developer skilled in JavaScript (ES6+), TypeScript, React.js, Next.js. I specialize in creating dynamic, responsive, and visually appealing web applications, turning ideas into interactive realities.
            I enjoy solving problems, learning new tools, and collaborating with others to bring creative solutions to life.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
