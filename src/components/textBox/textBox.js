import './textbox.scss'

const TextBox = ({ text, name }) => {
    return (
        <div className="textarea">
            <label>
                <textarea
                    placeholder="&nbsp;"
                    name={name}
                    rows="6"
                    required
                >
            
                </textarea >
                <span>{text}</span>
            </label>
        </div>
    );
}

export default TextBox;