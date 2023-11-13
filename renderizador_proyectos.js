const proyectos = [
  {
    title: 'CV-Batman',
    imgUrl: 'img/batman.webp',
    url: 'https://fabiodrizzt.github.io/CV-Batman/',
    descripcion: 'CV-Batman'
  },
  {
    title: 'HTML Forms',
    imgUrl: 'img/htmlform.gif',
    url: 'https://fabiodrizzt.github.io/Formularios-en-HTML/',
    descripcion: 'Formularios HTML'
  },
  {
    title: 'Animaciones',
    imgUrl: 'img/animaciones.gif',
    url: 'https://fabiodrizzt.github.io/Animaciones/',
    descripcion: 'Animaciones'
  },
  {
    title: 'PseudoSelectores',
    imgUrl: 'img/PseudoSelectores.gif',
    url: 'https://fabiodrizzt.github.io/PseudoSelectores/',
    descripcion: 'PseudoSelectores'
  },
  {
    title: 'Pizza&Front',
    imgUrl: 'img/pizza.gif',
    url: 'https://fabiodrizzt.github.io/PizzaandFront/',
    descripcion: 'Pizza&Front'
  },
  {
    title: 'Super Heroes',
    imgUrl: 'img/superheroes.png',
    url: 'https://fabiodrizzt.github.io/SuperHeroes/',
    descripcion: 'Super Heroes'
  },
  {
    title: 'Game Shop',
    imgUrl: 'img/game.png',
    url: 'https://fabiodrizzt.github.io/GameShop/',
    descripcion: 'bolsa de juegos'
  },
  {
    title: 'Pet Shop',
    imgUrl: 'img/pet-shop.png',
    url: 'hhttps://fabiodrizzt.github.io/PetShop/',
    descripcion: 'logo pet shop'
  },
  {
    title: 'Instafront',
    imgUrl: 'img/instafront.png',
    url: 'https://fabiodrizzt.github.io/InstaFront/',
    descripcion: 'logo instafront'
  }
]

const renderizarProyectos = arrProyectos => {
  const proyectos = document.querySelector('.proyectos')
  arrProyectos.forEach(element => {
    proyectos.innerHTML += `
        <a href="${element.url}" class="caja proyecto" target=blank>
            <p>${element.title}</p>
            <img src="${element.imgUrl}" alt="${element.descripcion}">
        </a>
        `
  })
}

renderizarProyectos(proyectos)
