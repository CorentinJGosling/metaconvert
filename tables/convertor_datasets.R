library(readxl)
file_path <- "list_datasets.xlsx"

# Read all sheets into a list of data frames
all_sheets <- readxl::excel_sheets(file_path)

data_frames_list <- lapply(all_sheets, function(sheet_name) {
  read_excel(file_path, sheet = sheet_name)
})

for (i in seq_along(all_sheets)) {
  df_i = NULL
  # df_i = mget(all_sheets[[i]])[[1]]
  df_i = data_frames_list[[i]]

  rio::export(df_i, paste0(all_sheets[i], ".xlsx"), overwrite=TRUE)
  rio::export(df_i, paste0(all_sheets[i], ".txt"))
}
