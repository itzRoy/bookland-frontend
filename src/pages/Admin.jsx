import React, { useState } from "react";
import styled from "styled-components";
import AdminGrid from "../components/AdminGrid/AdminGrid.jsx";
import BookCreate from "../components/BookCreate";
import GridViewIcon from "@mui/icons-material/GridView";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AdminContainer = styled.div`
  margin-top: 6.9rem;
  min-height: 100vh;
  background-color: ${(props) => props.bg};
`;

const AdminWrapper = styled.div`
  width: 80%;
  margin: auto;
`;
const ButtonsWrapper = styled.div`
  display: flex;
  width: 80%;
  margin: auto;
  padding: 30px 0;
  justify-content: space-around;
`;
const GridButton = styled(GridViewIcon)`
  color: red;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    color: #480404;
    transition: all 0.5s ease-in;
  }
`;

const AddButton = styled(AddCircleIcon)`
  color: #ca0606;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
    color: #480404;
    transition: all 0.5s ease-in;
  }
`;
const AdminNew = () => {
  const [showGrid, setShowGrid] = useState(true);
  const [showCreate, setShowCreate] = useState(false);

  const ShowGrid = () => {
    setShowGrid(true);
    setShowCreate(false);
  };

  const ShowCreate = () => {
    setShowGrid(false);
    setShowCreate(true);
  };

  return (
    <AdminContainer bg={showGrid ? "#b5b5b5" : "white"}>
      <AdminWrapper>
        <ButtonsWrapper>
          <GridButton style={{ fontSize: "45px" }} onClick={ShowGrid} />
          <AddButton style={{ fontSize: "45px" }} onClick={ShowCreate} />
        </ButtonsWrapper>
      </AdminWrapper>
      {showCreate && <BookCreate />}
      {showGrid && <AdminGrid />}
    </AdminContainer>
  );
};

export default AdminNew;
