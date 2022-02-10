import AdminInput from '../AddminInput/AdminInput'
import AdminText from '../AdminText/AdminText'
import Rating from '@mui/material/Rating'
import './adminadd.css'

const AdminAdd = () => {
    return ( 
        <div className="admin-add-form">
            <AdminInput type="text" text='Book name'/>
            <AdminInput type="text" text='Author name'/>
            <AdminInput type='month' text='when was this book published?'/>
            <AdminText text="Please write a description of the book"/>
            <div className="rating">
                <span>Please add this book's rating!</span>
                <Rating precision={0.01} />
                <span>{Rating.value}</span>
            </div>
            <button>Submit</button>
        </div>
     );
}
 
export default AdminAdd;