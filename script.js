const menuButton = document.querySelector("#menuButton");
const mobileNav = document.querySelector("#mobileNav");

menuButton.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("open");
  menuButton.classList.toggle("open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
});

mobileNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    menuButton.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

const searchPanel = document.querySelector("#searchPanel");
document.querySelector("#searchButton").addEventListener("click", () => {
  searchPanel.classList.add("open");
  searchPanel.querySelector("input").focus();
});
document.querySelector("#closeSearch").addEventListener("click", () => searchPanel.classList.remove("open"));

const menuContent = {
  personal: ["Norton 360 Deluxe", "Norton AntiVirus Plus", "Norton VPN", "Norton with LifeLock", "Compare plans", "Help me choose"],
  resources: ["Norton Blog", "Scam resources", "Privacy resources", "Free tools", "Free trials", "Cyber safety guides"],
  support: ["Customer support", "Community", "How to renew", "Premium Services", "Virus removal", "Order history"],
  free: ["Free antivirus trial", "Norton VPN trial", "Virus removal tool", "Password generator", "Scam detector", "Help me choose"]
};

const dropdown = document.querySelector("#navDropdown");
document.querySelectorAll("[data-menu]").forEach((button) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();
    const key = button.dataset.menu;
    const wasOpen = dropdown.classList.contains("open") && dropdown.dataset.active === key;
    dropdown.classList.remove("open");
    if (!wasOpen) {
      dropdown.innerHTML = menuContent[key].map((item) => `<a href="#">${item}</a>`).join("");
      dropdown.dataset.active = key;
      dropdown.classList.add("open");
    }
  });
});

document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target)) dropdown.classList.remove("open");
});

document.querySelectorAll(".features-button").forEach((button) => {
  button.addEventListener("click", () => button.closest(".plan-card").classList.toggle("expanded"));
});

document.querySelectorAll(".plan-tabs button").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".plan-tabs button").forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });
    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
  });
});

document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => event.preventDefault());
});
