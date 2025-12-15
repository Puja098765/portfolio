import "./Skills.css";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      image: "https://www.stefantopalovic.com/static/media/html.6b734b71944597da4e03.svg",
    },
    {
      name: "CSS",
      image: "https://www.stefantopalovic.com/static/media/css.43b6f3a8080c95843f4e.svg",
    },
    {
      name: "JavaScript",
      image: "https://www.stefantopalovic.com/static/media/javascript.de4c259c6136737c166c.svg",
    },
    {
      name: "React",
      image: "https://www.stefantopalovic.com/static/media/react.afac9c437240707b7496.svg",
    },
    {
      name: "Sass",
      image: "https://www.stefantopalovic.com/static/media/sass.595abb8d635532a1e3d3.svg",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-content">
          <p>Skills</p>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                <img src={skill.image} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
