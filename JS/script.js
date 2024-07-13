const body = document.querySelector('body');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const topNav = document.querySelector('.topnav__menu');
const blackScreen = document.querySelector('.black-screen');
const main = document.querySelector('main');



function openMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'true');
  //To hide every content for screen-reader when nav-menu is open (only for mobile)
  main.setAttribute('inert', '');
  body.style.overflowY = 'hidden';
  btnOpen.style.display = 'none';
  btnClose.style.display = 'block';
  btnClose.focus();
  topNav.style.translate = '0';
  topNav.classList.add('navMenuOpen');
  blackScreen.style.opacity = '1';
}

function closeMobileMenu() {
  btnOpen.setAttribute('aria-expanded', 'false');
  topNav.setAttribute('inert', '');
  main.removeAttribute('inert');
  body.style.overflowY = 'auto';
  btnOpen.style.display = 'block';
  btnClose.style.display = 'none';
  topNav.style.translate = '-100vw';
  topNav.classList.remove('navMenuOpen');
  blackScreen.style.opacity = '0';
  btnOpen.focus();
}


//to call the correct function - open and close nav-menu
btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);





const accordion = document.querySelector(".accordion");

accordion.addEventListener("click", (e) => {
  const activePanel = e.target.closest(".accordion__panel");
  if (!activePanel) return;
  toggleAccordion(activePanel);
});

function toggleAccordion(panelToActivate) {
  const activeButton = panelToActivate.querySelector("button");
  const activeChevron = panelToActivate.querySelector(".chevron");
  const activePanel = panelToActivate.querySelector(".accordion__content");
  const activePanelIsOpened = activeButton.getAttribute("aria-expanded");

  if (activePanelIsOpened === "true") {
    panelToActivate
      .querySelector("button")
      .setAttribute("aria-expanded", false);
    activeChevron.style.transform = 'rotate(0)';
    panelToActivate
      .querySelector(".accordion__content")
      .setAttribute("aria-hidden", true);
  } else {
    panelToActivate.querySelector("button").setAttribute("aria-expanded", true);
    activeChevron.style.transform = 'rotate(180deg)';
    panelToActivate
      .querySelector(".accordion__content")
      .setAttribute("aria-hidden", false);
  }
}