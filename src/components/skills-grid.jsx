import SkillCard from "./SkillCard";

const SkillsGrid = () => {
  const skills = [
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
