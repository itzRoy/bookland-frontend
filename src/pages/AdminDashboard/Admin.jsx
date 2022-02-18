import './Admin.css'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {GrView} from 'react-icons/gr'
import AdminView from '../../components/AdminView/Admin'
import BookCreate from '../../components/AdminAdd/BookCreate'

const Admin = () => {
    const handleAdd = () =>{
        const addForm = document.getElementById('Add-form')
        if (addForm.style.display === 'none'){
            addForm.style.display = 'block';
        } else {
            addForm.style.display = 'none'; 
        }
    }

    const handleView = () =>{
        const addForm = document.getElementById('view-form')
        if (addForm.style.display === 'none'){
            addForm.style.display = 'block';
        } else {
            addForm.style.display = 'none';
        }
    }

    return ( 
        <div className="admin-layout">
            <div className="admin-layout_characters">
                <div className="admin-layout_add">
                    <div className="admin-layout_add_btn" onClick={handleAdd}>
                        <AiOutlineAppstoreAdd />
                    </div>
                </div>
                <div className="admin-layout_edit">
                    <div className="admin-layout_edit_btn" onClick={handleView}>
                        <GrView />
                    </div>
                </div>
            </div>
            <div className="admin-layout_shows">
                <div className="admin-layout_add_form" id='Add-form'>
                        <BookCreate />
                </div>
                <div className="admin-layout_edit_table" id='view-form'>
                        <AdminView />
                </div>
            </div>
        </div>
     );
}
 
export default Admin;