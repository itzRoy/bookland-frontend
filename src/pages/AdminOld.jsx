import styled from "styled-components";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";

const Container = styled.div`
  min-height: 100vh;
  margin-top: 6.7rem;
  background-color: #b5b5b5;
  /* background: #0d0c22; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const TableContainer = styled.div`
  height: 80vh;
  width: 100%;
`;

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "book",
    headerName: "Book",
    width: 150,
    editable: true,
  },
  {
    field: "price",
    headerName: "Price",
    width: 150,
    editable: true,
  },
  {
    field: "action",
    headerName: "Action",
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const Admin = () => {
  return (
    <Container>
      <div style={{ height: 400, width: "90%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={4}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </Container>
  );
};

export default Admin;
