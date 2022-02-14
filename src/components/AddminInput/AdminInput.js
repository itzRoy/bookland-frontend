import './AdminInput.css';

const AdminInput = ({name, type, text}) => {
  return (
    <div className="input">
      <label>
        <input
          type={type}
          name={name}
          placeholder="&nbsp;"
        />
        <span>{text}</span>
      </label>
    </div>
  );
};

export default AdminInput;
