import "./Admin.scss";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const AdminView = () => {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.product.products);
  const [books, setBooks] = useState([]);
  useEffect(() => {
    let res;
    const getBooks = async () => {
      try {
        res = await axios.get("http://localhost:8000/books/all");
      } catch (err) {
        console.log(err);
      }
      setBooks(res.data);
    };
    getBooks();
  }, []);

  const handleDelete = async (id) => {
    let res;
    try {
      res = await axios.delete(`http://localhost:8000/books/delete/${id}`);
    } catch (err) {
      console.log(err);
    }
    setBooks(res.data);
  };

  const columns = [
    { field: "_id", headerName: "ID", width: 300 },
    {
      field: "title",
      headerName: "Book",
      width: 350,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "year", headerName: "Year", width: 150 },
    {
      field: "rating",
      headerName: "Rating",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 140,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/book/edit/" + params.row._id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="adminContainer">
      <div className="gridContainer">
        <DataGrid
          rowHeight={95}
          rows={books}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={5}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default AdminView;
