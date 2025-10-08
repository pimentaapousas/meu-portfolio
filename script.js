const skill = document.createElement("li");
const currentPage = document.getElementById("current-page");
const pages = {
  habilities: `
  <div style="width: 100%; text-align: center">
  <p>Habilidades</p>
  <section id="about">
  Abaixo seguem algumas das habilidades que adquiri nos meus 2 anos de trabalho com desenvolvimento web:
    <ul id="skills" />
  </section>
  </div>
  `,
  home: `
      <h2>Quem é Diego?</h2>
      <p>
        Sou um homem de pele branca, nascido em Belo Horizonte em 04 de julho de 1991. Tenho 34 anos, sou casado e gosto muito de conhecer novos lugares, viajar, aprender sobre novas culturas e conhecer pessoas incríveis.
      </p>
    </section>

    <section id="album">
      <h2>Momentos</h2>
      <div class="album-gallery">
        <img src="./assets/danteere.jpeg" alt="Renata e Dante" />
        <img src="./assets/eu.jpeg" alt="Eu" />
        <img src="./assets/familia.jpeg" alt="Família" />
      </div>
    </section>

    <section id="career">
      <h2>Minha trajetória profissional</h2>
      <p>
        Aos 17 anos iniciei minha carreira na empresa da minha família, atuando em setores como expedição, estoque e vendas. Durante a graduação em Administração de Empresas, fui contratado como estagiário no Bancodoc, onde realizei diversas atividades administrativas — desde análise de documentos até suporte a fornecedores.
      </p>
      <p>
        Após ser efetivado, minhas responsabilidades foram crescendo e novas oportunidades surgiram. Hoje, atuo como desenvolvedor web, unindo minha experiência administrativa ao mundo da tecnologia.
      </p>
    </section>`,
  contact: `<section id="contact">
  <h2>Fale comigo</h2>
  <p class="contact-intro">
    Acesse uma das plataformas abaixo para se comunicar comigo, acompanhar meu dia a dia ou saber mais sobre meu crescimento na área.
  </p>

  <div class="contact-links">
    <div class="contact-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/480px-LinkedIn_icon.svg.png" alt="LinkedIn" />
      <a href="https://www.linkedin.com/in/diegopousas/" target="_blank">@diegopousas</a>
    </div>
    <div class="contact-card">
      <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
      <a href="https://github.com/pimentaapousas" target="_blank">@pimentapousas</a>
    </div>
  </div>

  <span id="feedback-message">E-mail enviado com sucesso!</span>

  <form id="form-email">
    <label>Nome</label>
    <input type="text" name="name" required />

    <label>E-mail</label>
    <input type="email" name="email" required />

    <label>Assunto</label>
    <input type="text" name="title" required />

    <label>Mensagem</label>
    <textarea name="message" rows="5" required></textarea>

    <input type="submit" value="Enviar mensagem" />
  </form>
</section>

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
        event.preventDefault();
        const feedbackField = document.getElementById("feedback-message");
        feedbackField.removeAttribute("display");
        // these IDs from the previous steps
        emailjs.sendForm("service_mvvh5jp", "template_gjsge7t", this).then(
          () => {
            const feedbackField = document.getElementById("feedback-message");
            feedbackField.style.display = "flex";
            const formEmail = document.getElementById("form-email")
            formEmail.reset()
            setTimeout(() => {
              feedbackField.style.display = "none";
            }, 3000);
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


const goToHabilities = document.getElementById("btn-habilities").addEventListener("click", () => {
  currentPage.innerHTML = pages.habilities

  const skills = ["HTML", "CSS", "Java", "JavaScript", 'nodeJS', 'vueJS', 'mongoDB', 'postman']
  const skillsList = document.getElementById("skills")
  
  skills.forEach(skill => {
    const skillBadge = document.createElement("li")
    skillBadge.textContent = skill
    skillsList.appendChild(skillBadge)
  });
  
})

