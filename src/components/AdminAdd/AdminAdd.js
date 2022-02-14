import AdminInput from '../AddminInput/AdminInput'
import AdminText from '../AdminText/AdminText'
import Rating from '@mui/material/Rating'
import './adminadd.css'

const AdminAdd = () => {
    return ( 
        <div className="admin-add-form">
            <AdminInput type='file' text='Add a picture to the book please' name='Picture'/>
            <AdminInput type="text" text='Book name' name='title'/>
            <AdminInput type="text" text='Author name' name='author'/>
            <AdminInput type='month' text='when was this book published?' name='year'/>
            <AdminInput type='number' text='Price?' name='price'/>
            <AdminText text="Please write a description of the book"value='$' name='description'/>
            <div className="rating">
                <span>Please add this book's rating!</span>
                <Rating precision={0.01} size='large'name='rating'/>
                <span>{Rating.value}</span>
            </div>
            <div className="submit-btn">
                <button>Submit</button>
            </div>
        </div>
     );
}
 
export default AdminAdd;