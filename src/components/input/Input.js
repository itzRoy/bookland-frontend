import "./input.scss";

const Input = (props) => {
  return (
    <div className="input">
      <label>
        <input
          type={props.type}
          name={props.name}
          placeholder="&nbsp;"
          autoComplete="off"
          onBlur={props.setvalue}
          required
        />
        <span>{props.text}</span>
      </label>
    </div>
  );
};

export default Input;
