import './textbox.css'

const TextBox = ({text, name}) => {
    return ( 
        <div className="textarea">
            <label>
                <textarea
                    placeholder="&nbsp;"
                    name={name}
                >
                </textarea>
                <span>{text}</span>
            </label>
        </div>
     );
}
 
export default TextBox;