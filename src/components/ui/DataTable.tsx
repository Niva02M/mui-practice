import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../../data/GridTableData";

const DataTable = () => {
  return (
    <Box sx={{ height: "100%", width: "100%", bgcolor: "background.default" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 20,
            },
          },
        }}
        sx={{ bgcolor: "background.default" }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        pageSizeOptions={[10, 20, 50]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnResize
        density="compact"
        slotProps={{
          filterPanel: {
            filterFormProps: {
              logicOperatorInputProps: {
                variant: "outlined",
                size: "small",
              },
              columnInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              operatorInputProps: {
                variant: "outlined",
                size: "small",
                sx: { mt: "auto" },
              },
              valueInputProps: {
                InputComponentProps: {
                  variant: "outlined",
                  size: "small",
                },
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default DataTable;
