class ResponsiveNav {
  constructor(responsiveMenu, navList, navLinks) {
    this.responsiveMenu = document.querySelector(".responsive-menu");
    this.navList = document.querySelector(".nav-list");
    this.navLinks = document.querySelectorAll(".nav-list li");
    this.activeClass = "active";
    this.handleClick = this.handleClick.bind(this);
  }

//Na hora que clicar no menu responsivo irá demorar alguns segundos p aparecer todos
animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  //abre o menu responsivo e chama com a animação
  handleClick() {
    this.navList.classList.toggle("active");
    this.responsiveMenu.classList.toggle("active");
    this.animateLinks();
  }


  addClickEvent() {
    this.responsiveMenu.addEventListener("click", this.handleClick);
  }

//qdo clicar e se for o menu responsivo chama a função de click
  init() {
    if (this.responsiveMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const responsiveNav = new ResponsiveNav();
responsiveNav.init();
