const menuBtn = document.querySelector(".menuBtn");
const menuItems = document.querySelectorAll(".menu-item");
const menuList = document.querySelector(".menu-list");
const pages = document.querySelectorAll(".pages");
const homeBtn = document.getElementById("homeBtn");
const home = document.getElementById("home");
const aboutMeBtn = document.getElementById("aboutMeBtn");
const aboutMe = document.getElementById("aboutMe");
const skillBtn = document.getElementById("skillSetsBtn");
const skillSets = document.getElementById("skillSets");
const projectBtn = document.getElementById("projectsBtn");
const projects = document.getElementById("projects");
const contactMeBtn = document.getElementById("contactMeBtn");
const contactMe = document.getElementById("contactMe");
const emailAddress = document.getElementById("emailAddress");
const copyBtn = document.getElementById("copyBtn");

//copy contact email address
copyBtn.addEventListener("click", (e) => {
  emailAddress.select();
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  copyBtn.innerHTML = "Copied";
  copyBtn.style.fontSize = ".66rem";
  setTimeout(() => {
    copyBtn.innerHTML = `<i class="fa-solid fa-copy"></i>`;
    copyBtn.style.fontSize = "1.5rem";
  }, 2000);
});

//change menu name to selected menu and update class name
menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    //remove active class
    menuItems.forEach((i) => {
      i.classList.remove("active");
    });
    //add active class
    item.classList.add("active");
    //change current menu name
    const name = e.target.innerHTML;
    menuBtn.innerHTML = `${name} <span></span><span></span><span></span><span></span>`;

  });
});


homeBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    page.classList.remove("show");
  });
  // document.documentElement.style.setProperty("--Clr-primary", "#03e9f4")
  home.classList.add("show");
});

aboutMeBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    page.classList.remove("show");
  });
  // document.documentElement.style.setProperty("--Clr-primary", "#55a4e6")
  aboutMe.classList.add("show");
});

skillBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    page.classList.remove("show");
  });
  // document.documentElement.style.setProperty("--Clr-primary", "#A2B29F")
  skillSets.classList.add("show");
});

projectBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    page.classList.remove("show");
  });
  // document.documentElement.style.setProperty("--Clr-primary", "#ECECEC")
  projects.classList.add("show");
});

contactMeBtn.addEventListener("click", (e) => {
  pages.forEach((page) => {
    page.classList.remove("show");
  });
  // document.documentElement.style.setProperty("--Clr-primary", "#7C83FD")
  contactMe.classList.add("show");
});
