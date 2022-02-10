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
    minWidth:650
  }
})

const AdminView = () => {
  const books = useStyles();

  const [booksList, setBooksList] = useState([])

  const deleteBook = (id) =>{
    axios.delete(`http://localhost:8000/books/${id}`).then( ()=>{
      window.location.reload(false)
    })
  }

  useEffect(()=>{
    axios.get('http://localhost:8000/books').then((Book)=>{
      setBooksList(Book.data)
    })

  }, [])
    console.log(books.title)
  return ( 
    <div className="table">
      <h2>All Books</h2>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" className={books.table}>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Book Title</TableCell>
            <TableCell align="right">Author</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booksList.map((books, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {books.title}
              </TableCell>
              <TableCell align="right">{books.author}</TableCell>
              <TableCell align="right">{books.year}</TableCell>
              <TableCell align="right">{books.rating}</TableCell>
              <TableCell align="right">
              <IconButton aria-label="delete" size="small" onClick={()=> deleteBook(books._id)}>
                <EditIcon fontSize="small" />
              </IconButton>
              <IconButton aria-label="delete" size="small" onClick={()=> deleteBook(books._id)}>
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