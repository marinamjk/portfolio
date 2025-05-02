const switcher = document.getElementById("languageSwitcher");
const translatableElements = document.querySelectorAll("[data-es]");

function changeLanguage(lang) {
  translatableElements.forEach(el => {
    el.innerHTML = el.getAttribute(`data-${lang}`);
  });
}

switcher.addEventListener("change", () => {
  changeLanguage(switcher.value);
});

changeLanguage(switcher.value);