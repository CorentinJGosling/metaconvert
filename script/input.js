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

var checkbox = document.querySelector(".myCheckbox");
var esmDiv = document.querySelector(".esm");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    esmDiv.style.display = "block";
  } else {
    esmDiv.style.display = "none";
  }
});

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

//  ROUTING
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
        {
          element: document.querySelector(".glossary"),
          intro:
            "Here, we start by introducing you with the two types of effect measures generated from any input data. You will retrieve this categorization in each table below.",
        },
        {
          element: document.querySelector(".switch-container"),
          intro:
            "If you just discover our tool, click on this button to see all the effect size measures available in metaConvert.",
        },
        {
          element: document.querySelector("#selector"),
          intro:
            "If you already know what effect size measure you want to estimate, you can restrict the information available on this page to that concerning your effect size measure.",
        },
        {
          element: document.querySelector(".non-clickable-header"),
          intro:
            "This table of content allows to redirect you with the various types of input data that can be used to generate an effect size.",
        },
        {
          element: document.querySelector("#smd"),
          intro:
            "Now, let's focus on the tables. Each table presents the input data required to estimate the effect sizes indicated in the left cells.",
        },
        {
          element: document.querySelector(".table-fill th:nth-child(1)"),
          intro:
            "All effect measures placed in this column are those naturally estimated from the input data",
        },
        {
          element: document.querySelector(".table-fill th:nth-child(2)"),
          intro:
            "All effect measures placed in this column are those converted from the input data",
        },
        {
          element: document.querySelector(".table-fill th:nth-child(3)"),
          intro:
            "Then, in white background, the headers are names of columns that should be included in your dataset. ",
        },
        {
          element: document.querySelector(".foot_item:nth-child(1)"),
          intro:
            "For each column header, you can retrieve a description of the exact information expected",
        },
        {
          element: document.querySelector(".table-fill tr:nth-child(2)"),
          intro:
            "If your dataset contains information for a given combination of green ticks, the effect size + standard error + 95% CI will be generated automatically.<br><br> Here, the row of this table indicates that if your dataset contains information in columns named hedges_g, n_exp, and n_nexp, the software will naturally estimate a D (Cohen's d) + G (Hedges' g), and will convert that information to OR (odds ratio), COR (both standard correlation coefficient and Fisher's r-to-z correlation coefficient)",
        },
        {
          element: document.querySelector(".fictitious_datasets"),
          intro:
            "You can retrieve sample datasets for each input data type. You can upload these datasets to the app to better understand how it works.",
        },
        {
          element: document.querySelector(".datasets-container"),
          intro:
            "Last, if you start a project, we provide blank datasets for each different effect size measures available in the app.",
        },
      ],
    })
    .start();
});
function filterTables(category) {
  var tableContainers = document.querySelectorAll(
    ".table_container .table-title"
  );
  var tocItems = document.querySelectorAll(".toc-container .toc_list li");

  tableContainers.forEach(function (tableContainer) {
    var dataCategories = tableContainer
      .getAttribute("data-category")
      .split(" ");

    if (category === "all" || dataCategories.includes(category)) {
      tableContainer.style.display = "block";
    } else {
      tableContainer.style.display = "none";
    }
  });

  tocItems.forEach(function (tocItem) {
    var dataCategories = tocItem.getAttribute("data-category");

    if (!dataCategories) {
      tocItem.style.display = "block"; // Show non-filterable items
    } else if (category === "all" || dataCategories.includes(category)) {
      tocItem.style.display = "block";
    } else {
      tocItem.style.display = "none";
    }
  });
}
