🌐 Portfólio — Diego Vieira Pousas

Este projeto é um site pessoal/portfólio desenvolvido com o objetivo de apresentar minha trajetória, minhas habilidades em desenvolvimento web e oferecer um meio de contato direto via EmailJS.
O layout foi projetado com uma interface limpa, moderna e responsiva, proporcionando uma experiência agradável em qualquer dispositivo.

📖 Descrição do Projeto

O site foi desenvolvido com o foco em simplicidade, fluidez e desempenho.
Ele é dividido em três seções principais:

🏠 Home — Apresentação e informações principais.

💬 Contato — Formulário funcional de envio de e-mail via EmailJS e links para redes profissionais.

⚙️ Habilidades — Exibição interativa das tecnologias e ferramentas que domino.

O objetivo é centralizar minhas informações profissionais em um único local, facilitando o contato e a visualização da minha evolução como desenvolvedor.

🛠️ Tecnologias Utilizadas
Categoria	Tecnologias
Frontend	HTML5, CSS3, JavaScript (puro)
Integrações	EmailJS

Fontes e Ícones	Google Fonts, Flaticon
Hospedagem	GitHub Pages
✉️ Configuração do EmailJS

Para utilizar o formulário de contato com o EmailJS, siga os passos abaixo:

Crie uma conta no EmailJS
.

No Dashboard, clique em "Add New Service" e conecte o seu provedor de e-mail (por exemplo: Gmail).

Em seguida, crie um template de mensagem:

Vá em Email Templates → Create New Template.

Defina os campos: name, email, title, message.

Copie as informações necessárias:

Service ID

Template ID

Public Key

No seu projeto, inicie o EmailJS no arquivo principal:

(function () {
  emailjs.init({
    publicKey: "SUA_PUBLIC_KEY_AQUI",
  });
})();


No formulário (form-email), defina os name dos campos conforme configurado no seu template.

Pronto! Ao enviar o formulário, a mensagem será enviada diretamente para o seu e-mail cadastrado.

🌍 Site Publicado

🔗 Acesse o portfólio completo:
👉 https://diegopousas.github.io

💡 Sobre o Desenvolvedor

👨‍💻 Diego Vieira Pousas
Sou desenvolvedor web com foco em JavaScript, Vue.js e Node.js, com 2 anos de experiência no setor.
Busco sempre evoluir minhas habilidades e criar soluções que unam eficiência, design e usabilidade.

📫 Me encontre em:

LinkedIn

GitHub
