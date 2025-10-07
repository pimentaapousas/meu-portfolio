const skill = document.createElement("li");
const currentPage = document.getElementById("current-page");
const pages = {
  home: `
  <h3 style="text-align: center;">Bem vindo(a) a minha página !</h3>
  <section id="about">
  <div style="width: 100%; text-align: center">
  <p>Quem é Diego ?!</p>
  </div>
  <div
  style="width: 60%; margin: auto; margin-top: 0; text-align: center"
  >
  Sou um homem de pele branca nascido em Belo Horizonte em 04 de julho
  de 1991, tenho 34 anos, sou casado. Gosto muito de conhecer novos
  lugares, viajar, conhecer novas culturas e pessoas.
  <br /><br />
  </div>
  </section>
  <div id="album">
  <img src="./assets/danteere.jpeg" alt="renataedante" />
  <img src="./assets/eu.jpeg" alt="eu" />
  <img src="./assets/familia.jpeg" alt="familia" />
  </div>
  <section id="about">
  <div style="width: 100%; text-align: center">
  <p>Minha tragetória profissional</p>
  <div
  style="width: 60%; margin: auto; margin-top: 0; text-align: center"
  >
  Aos 17 anos iniciei minha carreira na empresa de minha família
  atuando em setores como expedição, estoque e vendas, ao iniciar
  minha graduação em Administração de empresas, fui contratado como
  estagiário no Bancodoc onde realizei diversas atividades
  administrativas como: análise de documentos, suporte a fornecedores
  sobre documentos exigidos pelos clientes depois foi efetivado e
  assim minhas atividades foram se deiversificando e oportunidades
  foram aparecendo e hoje atuo como desenvoldedor web.<br /><br />
  </div>
  </div>
  </section>`,
  contact: `<div style="width: 100%; text-align: center">
  <p>Fale comigo</p>
  <div
  style="width: 60%; margin: auto; margin-top: 0; text-align: center"
  >
  Acesse uma das plataformas abaixo para se comunicar comigo ou até mesmo para saber um pouco mais sobre meu dia-a-dia ou me acompanhe para saber sobre meu crescimento na área.
  </div>
    <div style="margin-top: 2%; display: flex; width: 100%; justify-content: center; gap: 5%">
        <div id="contact-form">
          <img style="width: 3vw" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/480px-LinkedIn_icon.svg.png" />
          <span>@diegopousas</span>
        </div>
        <div id="contact-form">
          <img style="width: 3vw" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          <span>@pimentaapousas</span>
        </div><br>
      </div>
    </div>
    <div style="width: 100%; display: grid; justify-content: center; margin-top: 20px">
      <form id="form-email">
        <!-- To simplify the tutorial, the value is static. -->
        <input type="hidden" name="time" value="Mar 10 2025 08:46">
        <label>Name</label>
        <input type="text" name="name" required>
        <label>Email</label>
        <input type="email" name="email" required>
        <label>Subject</label>
        <input type="text" name="title" required>
        <label>Message</label>
        <textarea name="message" required></textarea>
        <input type="submit" value="Send">
    </form>
    </div>
    `,
};
currentPage.innerHTML = pages.home;

const goContact = document
  .getElementById("btn-contact")
  .addEventListener("click", () => {
    currentPage.innerHTML = pages.contact;
    document
      .getElementById("form-email")
      .addEventListener("submit", function (event) {
        console.log("chamado");
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm("service_mvvh5jp", "template_gjsge7t", this).then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
      });
  });

const goHome = document
  .getElementById("btn-home")
  .addEventListener("click", () => {
    currentPage.innerHTML = pages.home;
  });

skill.classList.add("skill-badge");
const skillsList = document.getElementById("skills-list");

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git",
  "GitHub",
  "Node.js",
  "VueJS",
  "Mongo DB",
  "Postman",
];

const setSkillInfo = (name, description) => {
  const skillName = document.getElementById("skill-name");
  const skillDescription = document.getElementById("skill-description");
  skillName.innerText = name;
  skillDescription.innerText = description;
};

let showSkillInfo = false;
