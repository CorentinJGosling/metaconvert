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
        // {
        //   element: document.querySelector("#selector"),
        //   intro:
        //     "If you already know what effect size measure you want to estimate, you can restrict the information available on this page to that concerning your effect size measure.",
        // },
        {
          element: document.querySelector("#esTable"),
          intro:
            "This table allows you to download a well-formatted spreadsheet.",
        },
        {
          element: document.querySelector("#esTable"),
          intro:
            "Simply tick the box of the type of input data from which you want to estimate your effect size measure.",
        },
        {
          element: document.querySelector("#downloadBtn_csv"),
          intro: "And then, download the personalised data extraction sheet!",
        },
        // {
        //   element: document.querySelector(".table-fill th:nth-child(2)"),
        //   intro:
        //     "All effect measures placed in this column are those converted from the input data",
        // },
        // {
        //   element: document.querySelector(".table-fill th:nth-child(3)"),
        //   intro:
        //     "Then, in white background, the headers are names of columns that should be included in your dataset. ",
        // },
        // {
        //   element: document.querySelector(".foot_item:nth-child(1)"),
        //   intro:
        //     "For each column header, you can retrieve a description of the exact information expected",
        // },
        // {
        //   element: document.querySelector(".table-fill tr:nth-child(2)"),
        //   intro:
        //     "If your dataset contains information for a given combination of green ticks, the effect size + standard error + 95% CI will be generated automatically.<br><br> Here, the row of this table indicates that if your dataset contains information in columns named hedges_g, n_exp, and n_nexp, the software will naturally estimate a D (Cohen's d) + G (Hedges' g), and will convert that information to OR (odds ratio), COR (both standard correlation coefficient and Fisher's r-to-z correlation coefficient)",
        // },
        // {
        //   element: document.querySelector(".fictitious_datasets"),
        //   intro:
        //     "You can retrieve sample datasets for each input data type. You can upload these datasets to the app to better understand how it works.",
        // },
        // {
        //   element: document.querySelector(".datasets-container"),
        //   intro:
        //     "Last, if you start a project, we provide blank datasets for each different effect size measures available in the app.",
        // },
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
const itemList = [
  {
    name: "1. Cohen's d or Hedges' g",
    columns: ["cohen_d", "hedges_g", "n_exp", "n_nexp"],
    naturalES: "SMD",
    convertedES: "OR+COR",
    tableId: "smd",
    adjustment: "Crude",
  },
  {
    name: "2. Odds Ratio",
    columns: [
      "or",
      "logor",
      "logor_se",
      "or_ci_lo",
      "or_ci_up",
      "logor_ci_lo",
      "logor_ci_up",
      "n_exp",
      "n_nexp",
      "n_cases",
      "n_controls",
      "baseline_risk",
      "small_margin_prop",
    ],
    naturalES: "OR",
    convertedES: "RR+NNT+SMD+COR",
    tableId: "or",
    adjustment: "Crude",
  },
  {
    name: "3. Risk Ratio",
    columns: [
      "rr",
      "logrr",
      "logrr_se",
      "logrr_ci_lo",
      "logrr_ci_up",
      "n_exp",
      "n_nexp",
      "n_cases",
      "n_controls",
      "baseline_risk",
      "small_margin_prop",
    ],
    naturalES: "RR",
    convertedES: "OR+NNT",
    tableId: "rr",
    adjustment: "Crude",
  },
  {
    name: "4. Pearson's r or Fisher's z",
    columns: [
      "pearson_r",
      "fisher_z",
      "n_exp",
      "n_nexp",
      "n_sample",
      "sd_iv",
      "unit_increase_iv",
      "unit_type",
    ],
    naturalES: "COR",
    convertedES: "SMD+OR",
    tableId: "cor",
    adjustment: "Crude",
  },
  {
    name: "5. Incidence Ratio Ratio",
    columns: ["n_cases_exp", "n_cases_nexp", "time_exp", "time_nexp"],
    naturalES: "IRR",
    convertedES: "N/A",
    tableId: "irr",
    adjustment: "Crude",
  },
  {
    name: "6. Variability indices",
    columns: [
      "mean_exp",
      "mean_nexp",
      "mean_sd_exp",
      "mean_sd_nexp",
      "mean_se_nexp",
      "mean_ci_lo_exp",
      "mean_ci_up_exp",
      "mean_ci_lo_nexp",
      "mean_ci_up_nexp",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "VAR",
    convertedES: "N/A",
    tableId: "var",
    adjustment: "Crude",
  },
  {
    name: "7. Contingency (2x2) table or proportions",
    columns: [
      "n_cases_exp",
      "n_cases_nexp",
      "n_controls_exp",
      "n_controls_nexp",
      "prop_cases_exp",
      "prop_cases_nexp",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "OR+RR+NNT",
    convertedES: "SMD+COR",
    tableId: "contingency",
    adjustment: "Crude",
  },
  {
    name: "8. Phi or chi-square",
    columns: ["phi", "chisq", "chisq_pval", "n_cases", "n_exp", "n_sample"],
    naturalES: "OR+RR+NNT",
    convertedES: "SMD+COR	",
    tableId: "phi",
    adjustment: "Crude",
  },
  {
    name: "9. Means and dispersion",
    columns: [
      "mean_exp",
      "mean_nexp",
      "mean_sd_exp",
      "mean_sd_nexp",
      "mean_se_exp",
      "mean_se_nexp",
      "mean_ci_lo_exp",
      "mean_ci_up_exp",
      "mean_ci_lo_nexp",
      "mean_ci_up_nexp",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "means",
    adjustment: "Crude",
  },
  {
    name: "10. Mean difference and dispersion",
    columns: [
      "md",
      "md_sd",
      "md_se",
      "md_ci_lo",
      "md_ci_up",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "mean_difference_crude",
    adjustment: "Crude",
  },
  {
    name: "11. ANOVA statistics, Student's t-test, or point-bis correlation",
    columns: [
      "anova_f",
      "anova_f_pval",
      "student_t",
      "student_t_pval",
      "pt_bis_r",
      "pt_bis_r_pval",
      "etasq",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD",
    convertedES: "OR+COR",
    tableId: "anova",
    adjustment: "Crude",
  },
  {
    name: "12. Median, range and/or interquartile range",
    columns: [
      "min_exp",
      "min_nexp",
      "q1_exp",
      "q1_nexp",
      "med_exp",
      "med_nexp",
      "q3_exp",
      "q3_nexp",
      "max_exp",
      "max_nexp",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD",
    convertedES: "MD+OR+COR",
    tableId: "medians",
    adjustment: "Crude",
  },
  {
    name: "13. (Un-)Standardized regression coefficient",
    columns: ["beta_std", "beta_unstd", "dv_sd", "n_exp", "n_nexp"],
    naturalES: "SMD",
    convertedES: "OR+COR",
    tableId: "regression",
    adjustment: "Crude",
  },
  {
    name: "14. Paired: mean change, and dispersion",
    columns: [
      "mean_change_exp",
      "mean_change_nexp",
      "mean_change_sd_exp",
      "mean_change_sd_nexp",
      "mean_change_se_exp",
      "mean_change_se_nexp",
      "mean_change_ci_lo_exp",
      "mean_change_ci_up_exp",
      "mean_change_ci_lo_nexp",
      "mean_change_ci_up_nexp",
      "mean_change_pval_exp",
      "mean_change_pval_nexp",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "change_scores",
    adjustment: "Crude",
  },
  {
    name: "15. Paired: pre-post means and dispersion",
    columns: [
      "mean_pre_exp	mean_exp",
      "mean_pre_nexp",
      "mean_nexp",
      "mean_pre_sd_exp",
      "mean_sd_exp",
      "mean_pre_sd_nexp",
      "mean_sd_nexp",
      "mean_pre_se_exp",
      "mean_se_exp",
      "mean_pre_se_nexp",
      "mean_se_nexp",
      "mean_pre_ci_lo_exp",
      "mean_pre_ci_up_exp",
      "mean_pre_ci_lo_nexp",
      "mean_pre_ci_up_nexp",
      "mean_ci_lo_nexp",
      "mean_ci_up_nexp",
      "r_pre_post_exp",
      "r_pre_post_nexp",
      "n_exp	n_nexp",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "pre_post",
    adjustment: "Crude",
  },
  {
    name: "16. Paired: Paired F- or t-test",
    columns: [
      "paired_f_exp",
      "paired_f_nexp",
      "paired_f_pval_exp",
      "paired_f_pval_nexp",
      "paired_t_exp",
      "paired_t_nexp",
      "paired_t_pval_exp",
      "paired_t_pval_nexp",
      "r_pre_post_exp",
      "r_pre_post_nexp",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD",
    convertedES: "OR+COR",
    tableId: "paired_anova",
    adjustment: "Crude",
  },
  {
    name: "17. Cohen's d (adjusted)",
    columns: [
      "cohen_d_adj",
      "cov_outcome_r",
      "n_cov_ancova",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD",
    convertedES: "OR+COR",
    tableId: "smd_adjusted",
    adjustment: "Adjusted",
  },
  {
    name: "18. ANCOVA statistics, eta-squared",
    columns: [
      "ancova_t	ancova_f",
      "ancova_t_pval",
      "ancova_f_pval",
      "etasq_adj",
      "cov_outcome_r",
      "n_cov_ancova",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD",
    convertedES: "OR+COR",
    tableId: "ancova_statistics",
    adjustment: "Adjusted",
  },
  {
    name: "19. Means and dispersion (adjusted)",
    columns: [
      "ancova_mean_exp",
      "ancova_mean_nexp",
      "ancova_mean_sd_exp",
      "ancova_mean_sd_nexp",
      "ancova_mean_se_exp",
      "ancova_mean_se_nexp",
      "ancova_mean_ci_lo_exp",
      "ancova_mean_ci_up_exp",
      "ancova_mean_ci_lo_nexp",
      "ancova_mean_ci_up_nexp",
      "ancova_ancova_mean_sd_pooled_crude",
      "ancova_ancova_mean_sd_pooled_adj",
      "n_exp",
      "n_nexp",
      "cov_outcome_r",
      "n_cov_ancova",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "ancova_means",
    adjustment: "Adjusted",
  },
  {
    name: "20. Mean difference and dispersion (adjusted)",
    columns: [
      "ancova_md",
      "ancova_md_sd",
      "ancova_md_se",
      "ancova_md_ci_lo",
      "ancova_md_ci_up",
      "n_exp",
      "n_nexp",
      "cov_outcome_r",
      "n_cov_ancova",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "mean_difference_adjusted",
    adjustment: "Adjusted",
  },
  {
    name: "21. From plot: Raw means and measure of dispersion",
    columns: [
      "plot_mean_exp",
      "plot_mean_nexp",
      "plot_mean_sd_lo_exp",
      "plot_mean_sd_up_exp",
      "plot_mean_sd_lo_nexp",
      "plot_mean_sd_up_nexp",
      "plot_mean_se_lo_exp",
      "plot_mean_se_up_exp",
      "plot_mean_se_lo_nexp",
      "plot_mean_se_up_nexp",
      "plot_mean_ci_lo_exp",
      "plot_mean_ci_up_exp",
      "plot_mean_ci_lo_nexp",
      "plot_mean_ci_up_nexp",
      "n_exp",
      "n_nexp",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "plot_means",
    adjustment: "Crude",
  },
  {
    name: "22. From plot: adjusted means and dispersion",
    columns: [
      "ancova_plot_mean_exp",
      "ancova_plot_mean_nexp",
      "ancova_plot_mean_sd_lo_exp",
      "ancova_plot_mean_sd_up_exp",
      "ancova_plot_mean_sd_lo_nexp",
      "ancova_plot_mean_sd_up_nexp",
      "ancova_plot_mean_se_lo_exp",
      "ancova_plot_mean_se_up_exp",
      "ancova_plot_mean_se_lo_nexp",
      "ancova_plot_mean_se_up_nexp",
      "ancova_plot_mean_ci_lo_exp",
      "ancova_plot_mean_ci_up_exp",
      "ancova_plot_mean_ci_lo_nexp",
      "ancova_plot_mean_ci_up_nexp",
      "n_exp",
      "n_nexp",
      "cov_outcome_r",
      "n_cov_ancova",
    ],
    naturalES: "SMD+MD",
    convertedES: "OR+COR",
    tableId: "plot_ancova_means",
    adjustment: "Adjusted",
  },
  {
    name: "23. User's input (crude)",
    columns: [
      "measure",
      "user_es_measure_crude",
      "user_es_crude",
      "user_se_crude",
      "user_ci_lo_crude",
      "user_ci_up_crude",
    ],
    naturalES: "Any",
    convertedES: "N/A",
    tableId: "user_crude",
    adjustment: "Crude",
  },
  {
    name: "24. User's input (adjusted)",
    columns: [
      "measure",
      "user_es_measure_adj",
      "user_es_adj",
      "user_se_adj",
      "user_ci_lo_adj",
      "user_ci_up_adj",
    ],
    naturalES: "Any",
    convertedES: "N/A",
    tableId: "user_adjusted",
    adjustment: "Adjusted",
  },
];

const tableBody = document.querySelector("#esTable tbody");

// Create table rows
itemList.forEach((item, index) => {
  const row = tableBody.insertRow();

  const cellEffect = row.insertCell(0);
  const cellNatural = row.insertCell(1);
  const cellConverted = row.insertCell(2);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `checkbox-${index}`;
  checkbox.addEventListener("change", (event) => {
    toggleTable(item.tableId, event.target.checked);
  });

  const label = document.createElement("label");
  label.htmlFor = `checkbox-${index}`;
  label.textContent = item.name;

  cellEffect.appendChild(checkbox);
  cellEffect.appendChild(label);
  cellNatural.textContent = item.naturalES;
  cellConverted.textContent = item.convertedES;
});

document
  .getElementById("downloadBtn_csv")
  .addEventListener("click", generateCSV);
document
  .getElementById("downloadBtn_xlsx")
  .addEventListener("click", generateXLS);

document.addEventListener("DOMContentLoaded", (event) => {
  initializeTableVisibility();
});

function toggleTable(tableId, isChecked) {
  const table = document.querySelector(
    `.table_container .table-title[id="${tableId}"]`
  );
  if (table) {
    table.style.display = isChecked ? "block" : "none";
  }
}

// Function to initialize table visibility
function initializeTableVisibility() {
  const tables = document.querySelectorAll(".table_container .table-title");
  tables.forEach((table) => {
    table.style.display = "none";
  });

  const checkboxes = document.querySelectorAll(
    '#esTable input[type="checkbox"]'
  );
  checkboxes.forEach((checkbox, index) => {
    const item = itemList[index];
    toggleTable(item.tableId, checkbox.checked);
  });
}

function hideAllTables() {
  const tables = document.querySelectorAll(".table_container > div");
  tables.forEach((table) => {
    table.style.display = "block";
  });
}

function generateCSV() {
  const checkedItems = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => itemList[parseInt(checkbox.id.split("-")[1])]);

  if (checkedItems.length === 0) {
    alert("Please select at least one item.");
    return;
  }

  const allColumns = [...new Set(checkedItems.flatMap((item) => item.columns))];
  const fixed_columns = [
    "study_id",
    "author",
    "year",
    "predictor",
    "outcome",
    "info_expected",
  ];
  const csvContent = [fixed_columns, allColumns].join(",") + "\n";

  const blob = new Blob([csvContent], {
    type: "text/csv;charset=utf-8;",
  });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "selected_items.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
function generateXLS() {
  const checkedItems = Array.from(
    document.querySelectorAll('input[type="checkbox"]:checked')
  ).map((checkbox) => itemList[parseInt(checkbox.id.split("-")[1])]);

  if (checkedItems.length === 0) {
    alert("Please select at least one item.");
    return;
  }

  const allColumns = [...new Set(checkedItems.flatMap((item) => item.columns))];
  const fixed_columns = [
    "study_id",
    "author",
    "year",
    "predictor",
    "outcome",
    "info_expected",
  ];
  const headers = [...fixed_columns, ...allColumns];

  // Create a worksheet
  const ws = XLSX.utils.aoa_to_sheet([headers]);

  // Create a workbook
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  // Generate Excel file
  const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  const blob = new Blob([excelBuffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });

  // Create download link
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "selected_items.xlsx");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
