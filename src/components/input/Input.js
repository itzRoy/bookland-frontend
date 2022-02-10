import "./input.css";

const Input = ({name, type, text}) => {
  return (
    <div className="input">
      <label>
        <input
          type={type}
          name={name}
          placeholder="&nbsp;"
          autoComplete="off"
        />
        <span>{text}</span>
      </label>
    </div>
  );
};

export default Input;
