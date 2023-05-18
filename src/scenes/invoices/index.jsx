import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Amount",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    { field: "phone", headerName: "Phone", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="INVOICES"
          subtitle="Invoice Balance"
        />
      </Box>
      <Box sx={{
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none"
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: colors.blueAccent[700],
          borderTop: "none"
        },
        "& .MuiDataGrid-toolbarContainer": {
          padding: "10px",

          "& .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`
        }
      }}>
        <DataGrid
          rows={mockDataInvoices}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          checkboxSelection
        />
      </Box>
    </Box>
  );
};

export default Invoices;
