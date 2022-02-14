import './adminview.css'
import { useEffect, useState } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles({
  table:{
    minWidth:650,
  }
}) 

const AdminView = () => {
  const Books = useStyles();

  const [BooksList, setBooksList] = useState([])
  const [counter, setCounter] = useState(0)

  const deleteBook = async (id) => {
    let res;
    try {
      res = await axios.delete(`http://localhost:8000/books/delete/${id}`);
      setCounter(counter+1)
    } catch (err) {
      console.log(err);
    }
    setBooksList(res.data);
  };

  useEffect(()=>{
    axios.get('http://localhost:8000/books').then((Book)=>{
      setBooksList(Book.data)
    })

  }, [counter])
  return ( 
    <div className="table">
      <h2>All Books</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className={Books.table}>
        <TableHead>
          <TableRow>
            <TableCell align='left'>Book Title</TableCell>
            <TableCell align="center">Author</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Rating</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {BooksList.map((Books, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {Books.title}
              </TableCell>
              <TableCell align="center">{Books.author}</TableCell>
              <TableCell align="right">{Books.year}</TableCell>
              <TableCell align="right">{Books.rating}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="edit" size="small">
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" size="small" onClick={() => deleteBook(Books._id)}>
                <DeleteIcon fontSize="small" />
              </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   );
}
 
export default AdminView;