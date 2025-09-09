const skill = document.createElement('li');
skill.classList.add('skill-badge');
const skillsList = document.getElementById('skills-list');

const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub', 'Node.js', 'VueJS', 'Mongo DB', 'Postman'];

skills.forEach((item) => {
  const skillItem = document.createElement('li');
  skillItem.classList.add('skill-badge');
  skillItem.innerText = item;
  skillsList.appendChild(skillItem);
  skillItem.addEventListener('click', (e) => {
  showSkillInfo = true;
  console.log(e.target)
  });
});

const setSkillInfo = (name, description) => {
  const skillName = document.getElementById('skill-name');
  const skillDescription = document.getElementById('skill-description');
  skillName.innerText = name;
  skillDescription.innerText = description;
};

const skillInfo = document.getElementById('skill-info');
skillInfo.addEventListener('click', () => {
  showSkillInfo = false;
});

let showSkillInfo = false