import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="Code, Matcha, and Calisthenics" />
          <p className="text-slate-600 mt-8 leading-loose">
            Whether it's crafting elegant code, savoring a warm cup of matcha,
            or perfecting calisthenics moves, I find joy in balancing
            creativity, mindfulness, and physical strength. Each passion fuels
            the other, shaping a holistic approach to personal and professional
            growth.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
