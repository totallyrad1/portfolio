import SkillCard from "./SkillCard";

const SkillsGrid = () => {
  const skills = [
    {
      title: "React",
      description: "A library for building dynamic user interfaces—like this website—enabling seamless user experiences.",
    },
    {
      title: "Next.js",
      description: "A cutting-edge framework for React, streamlining web development with features like server-side rendering.",
    },
    {
      title: "Node.js",
      description: "A runtime environment for server-side JavaScript, bringing speed and flexibility to backend development.",
    },
    {
      title: "C / C++",
      description: "Learned at 1337 School, C and C++ helped  my problem-solving skills and build efficient applications.",
    },
    {
      title: "Docker",
      description: "A containerization tool that simplifies application deployment and ensures scalability across environments.",
    },
    {
      title: "Git & GitHub",
      description: "A powerful combination for version control and collaborative development, streamlining team workflows.",
    },
  ];
  

  return (
    <div className=" min-h-screen py-16 px-4">
      <h3 className="text-4xl font-extrabold text-black animate-wiggle animate-infinite animate-duration-[4000ms] text-center">
          Languages & Frameworks
      </h3>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-16">Languages & Frameworks</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} title={skill.title} description={skill.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsGrid;
