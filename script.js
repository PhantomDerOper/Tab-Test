const tabMenus = document.querySelectorAll(".tabÜbersicht .tab");
const tabContents = document.querySelectorAll(".tabInhalt");

function activateTab(index) {
  tabContents.forEach((content) => {
    content.style.display = "none";
  });

  tabContents[index].style.display = "block";
  tabMenus.forEach((tab) => {
    tab.classList.remove("active");
  });

  tabMenus[index].classList.add("active");
}

tabMenus.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    activateTab(index);
  });
});

activateTab(0);
