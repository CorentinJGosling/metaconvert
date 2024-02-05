const navbar = document.querySelector("nav");
const navLinks = document.querySelector(".nav-links");
var navIcons = document.querySelectorAll("#hamburger-menu");

navIcons.forEach(function (navIcon) {
  navIcon.addEventListener("click", function () {
    navIcon.classList.toggle("open");
    navLinks.classList.toggle("open");
  });
});

const navLinksli = document.querySelectorAll(".nav-links li");

navLinksli.forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.querySelector("a").getAttribute("href");
    window.location.href = href;
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// const popup = document.getElementById("popup");
// const closeButton = document.getElementById("closeButton");

// // Show popup when the page loads
// window.addEventListener("load", () => {
//   popup.style.display = "flex";
// });

// // Add click event listener to close button
// closeButton.addEventListener("click", () => {
//   popup.style.display = "none";
// });

// // Add click event listener to outside of popup to close popup
// popup.addEventListener("click", (event) => {
//   if (event.target === popup) {
//     popup.style.display = "none";
//   }
// });

const Switch_table = document.querySelector(".esm");
const checkbox = document.querySelector(".myCheckbox");
Switch_table.style.opacity = 0;
Switch_table.style.marginTop = "-20px";

function go2(event) {
  event.preventDefault();
  Switch_table.animate(
    {
      opacity: [0, 1],
      marginTop: ["-10px", 0],
    },
    {
      duration: 500,
      fill: "forwards",
    }
  );
}
checkbox.addEventListener("change", function (event) {
  if (event.target.checked) {
    Switch_table.classList.add("show_toc");
  } else {
    Switch_table.classList.remove("show_toc");
  }
});
checkbox.addEventListener("change", go2);

//  ROUTING
const seeEffectMeasure = document.querySelector(".btn_effect_measure");
const seeListInput = document.querySelector(".btn_list_input");
const listEffectMeasure = document.querySelector(".category-buttons");
const listInput = document.querySelector(".toc-container");
const Tables = document.querySelector(".table_container");

// SELECT TABLES
function toggleMenu() {
  document.querySelector(".download_extract").classList.toggle("active");
}

const categoryButtons = document.querySelectorAll(".category-buttons button");
const cards = document.querySelectorAll(".table-title");

document.querySelector(".start_tuto").addEventListener("click", function () {
  introJs()
    .setOptions({
      steps: [
        {
          intro: "Welcome! Let's start a quick tour of the page",
        },
        // {
        //   element: document.querySelector(".glossary"),
        //   intro:
        //     "Here, we introduce you with the two types of effect measures generated from any input data. You will retrieve this categorization in each table below.",
        // },
        // {
        //   element: document.querySelector(".switch-container"),
        //   intro:
        //     "If you just discover our tool, click on this button to see all the effect size measures available in metaConvert.",
        // },
        // {
        //   element: document.querySelector(".toc"),
        //   intro:
        //     "This table of content allows to redirect you with the various types of input data that can be used to generate an effect size.",
        // },
        // {
        //   element: document.querySelector("#smd"),
        //   intro: "Now, let's focus on the tables. Each table presents",
        // },
        {
          element: document.querySelector(".table-fill thead tr:nth-child(1)"),
          intro: "ZZ",
        },
        {
          element: document.querySelector(".table-fill thead tr:nth-child(2)"),
          intro: "SSSS",
        },
        {
          element: document.querySelector(".table-fill td:nth-child(1)"),
          intro: "SSSS",
        },
        {
          element: document.querySelector(
            ".table-fill:nth-child(1) tr:nth-child(-n+3)"
          ),
          intro: "SSSS",
        },
        {
          element: document.querySelector(
            ".table-fill:nth-child(1) tbody tr:nth-child(1) td"
          ),
          intro: "SSSS",
        },
        {
          element: document.querySelector("#table_smd tr:nth-child(2)"),
          intro: "SSSS",
        },
      ],
    })
    .start();
});
// seeListInput.addEventListener("click", () => {
//   seeEffectMeasure.classList.remove("btn_active");
//   listEffectMeasure.classList.remove("show_grid");
//   seeListInput.classList.add("btn_active");
//   listInput.classList.add("show_toc");
//   Tables.classList.add("show_toc");

// cards.forEach((card) => {
//   card.classList.add("show");
// });
// });
// seeEffectMeasure.addEventListener("click", () => {
//   seeEffectMeasure.classList.add("btn_active");
//   listEffectMeasure.classList.add("show_grid");
//   seeListInput.classList.remove("btn_active");
//   listInput.classList.remove("show_toc");
//   Tables.classList.add("show_toc");
// });

// Trigger the seeListInput click event when the page loads
// document.addEventListener("DOMContentLoaded", () => {
//   seeListInput.click();
// });

// categoryButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     const category = button.getAttribute("data-category");
//     cards.forEach((card) => {
//       if (category === "all" || card.dataset.category.includes(category)) {
//         card.classList.add("show");
//       } else {
//         card.classList.remove("show");
//       }
//     });
//     categoryButtons.forEach((btn) => {
//       btn.classList.remove("active");
//     });
//     button.classList.add("active");
//   });
// });

// Show all cards by default
// cards.forEach((card) => {
//   card.classList.add("show");
// });

// Activate the "All" button by default
// categoryButtons[0].classList.add("active");

// const dataElement = document.getElementById("data");
// dataElement.style.opacity = 0;
// dataElement.style.marginTop = "-20px";

// function go(event) {
//   event.preventDefault();
//   dataElement.animate(
//     {
//       opacity: [0, 1],
//       marginTop: ["-20px", 0],
//     },
//     {
//       duration: 500,
//       fill: "forwards",
//     }
//   );
// }
// const clickerButtons = document.querySelectorAll(".clicker");
// clickerButtons.forEach((button) => {
//   button.addEventListener("click", go);
// });

// document.addEventListener("DOMContentLoaded", go);
