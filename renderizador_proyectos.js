const proyectos = [
  {
    title: 'Game Shop',
    imgUrl: 'img/game.png',
    url: 'https://github.com/PabloNMerino/Maquetados---Front-End-1-/tree/main/GameShop',
    descripcion: 'bolsa de juegos'
  },
  {
    title: 'Examen final FrontEnd 1',
    imgUrl: 'img/logo.svg',
    url: 'https://github.com/PabloNMerino/Maquetados---Front-End-1-/tree/main/Manage',
    descripcion: 'logo manage'
  },
  {
    title: 'Pet Shop',
    imgUrl: 'img/pet-shop.png',
    url: 'https://github.com/PabloNMerino/Maquetados---Front-End-1-/tree/main/PetShop',
    descripcion: 'logo pet shop'
  },
  {
    title: 'Instafront',
    imgUrl: 'img/instafront.png',
    url: 'https://github.com/PabloNMerino/Maquetados---Front-End-1-/tree/main/instafront',
    descripcion: 'logo usuario instafront'
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
