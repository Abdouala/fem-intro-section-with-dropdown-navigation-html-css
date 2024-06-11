const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const overlay = document.querySelector('#overlay');
const media = window.matchMedia('(width < 69.375em)');

const toggleArrow = document.querySelectorAll(".arrow");

const dropdownBtn = document.querySelectorAll(".dropdown-btn");
const dropdown = document.querySelectorAll(".dropdown");
const links = document.querySelectorAll(".dropdown a");

function openMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'true');
}

function closeMobileMenu() {
    btnOpen.setAttribute('aria-expanded', 'false');
}

btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);



function setAriaExpandedFalse() {
  dropdownBtn.forEach((btn) => btn.setAttribute("aria-expanded", "false"));
}
  
function closeDropdownMenu() {
  dropdown.forEach((drop) => {
    drop.classList.remove("active");
    drop.addEventListener("click", (e) => e.stopPropagation());
  });
}

dropdownBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const dropdownIndex = e.currentTarget.dataset.dropdown;
    const dropdownElement = document.getElementById(dropdownIndex);
    const buttonArrow = btn.childNodes[1];

    dropdownElement.classList.toggle("active");
    buttonArrow.classList.toggle("toggle-arrow");

    dropdown.forEach((drop) => {
      if (drop.id !== btn.dataset["dropdown"]) {
        drop.classList.remove("active");
      }
    });
    e.stopPropagation();
  });
});

// close dropdown menu when the dropdown links are clicked
links.forEach((link) =>
  link.addEventListener("click", () => {
    closeDropdownMenu();
    setAriaExpandedFalse();
    toggleHamburger();
  })
);

// close dropdown menu when you click on the document body
document.documentElement.addEventListener("click", () => {
  closeDropdownMenu();
  setAriaExpandedFalse();
});