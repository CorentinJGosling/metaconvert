library(readxl)
file_path <- "./web/tables/list_datasets.xlsx"
library(tableHTML)
library(tidyverse)
# Read all sheets into a list of data frames
all_sheets <- readxl::excel_sheets(file_path)

data_frames_list <- lapply(all_sheets, function(sheet_name) {
  read_excel(file_path, sheet = sheet_name)
})

for (i in seq_along(all_sheets)) {
  df_i = NULL
  # df_i = mget(all_sheets[[i]])[[1]]
  df_i = data_frames_list[[i]]
  rio::export(df_i, paste0("./web/tables/", all_sheets[i], ".xlsx"), overwrite=TRUE)
  rio::export(df_i, paste0("./web/tables/", all_sheets[i], ".txt"))
}
######################################
file_path <- "./web/tables/list_datasets.xlsx"
all_sheets <- readxl::excel_sheets(file_path)

data_frames_list <- lapply(all_sheets, function(sheet_name) {
  read_excel(file_path, sheet = sheet_name)
})

for (i in seq_along(all_sheets)) {
  print(i)
  df_i = NULL
  df_i = data_frames_list[[i]]
  df_i = df_i %>% mutate_all(as.character)
  df_i[, 5:ncol(df_i)][!is.na(df_i[, 5:ncol(df_i)])] <- "x"

  df_i[df_i == "x"] <- '<i class="far fa-check-circle fa-2x"
  style="color: rgb(0, 147, 15)"></i>'
  if (any(is.na(df_i[is.na(df_i)]))) {
  #   df_i[is.na(df_i)] <- '<i class="far fa-question-circle fa-2x"
  # style="color: rgb(222, 159, 1)"></i>'
    df_i[is.na(df_i)] <- '<i style="color:#B40000" class="fas fa-times"></i>'
  }

  df_i = df_i[,3:ncol(df_i)]
  assign(all_sheets[i], df_i)
}

for (i in seq_along(all_sheets)) {
  df_i = NULL
  df_i = mget(all_sheets[[i]])[[1]]

  html_tbl = df_i %>%
    tableHTML(class='table-fill', escape = FALSE,
              rownames = FALSE)

  writeLines(as.character(html_tbl), paste0("./web/tables/", all_sheets[i], ".html"))
}
