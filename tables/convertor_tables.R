library(readxl)
library(tableHTML)
file_path <- "/web/tables/list_tables.xlsx"

# Read all sheets into a list of data frames
all_sheets <- readxl::excel_sheets(file_path)

data_frames_list <- lapply(all_sheets, function(sheet_name) {
  read_excel(file_path, sheet = sheet_name)
})

for (i in seq_along(all_sheets)) {
  df_i = NULL
  df_i = data_frames_list[[i]]
  df_i[df_i == "x"] <- '<i class="far fa-check-circle fa-2x"
  style="color: rgb(0, 147, 15)"></i>'
  df_i[is.na(df_i)] <- '<i class="far fa-question-circle fa-2x"
  style="color: rgb(222, 159, 1)"></i>'
  assign(all_sheets[i], df_i)
}

for (i in seq_along(all_sheets)) {
  df_i = NULL
  df_i = mget(all_sheets[[i]])[[1]]

  html_tbl = df_i %>%
    tableHTML(class='table-fill', escape = FALSE,
              rownames = FALSE)

  writeLines(as.character(html_tbl), paste0(all_sheets[i], ".html"))
}
