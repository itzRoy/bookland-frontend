import './admintext.css'

const TextBox = ({text}) => {
    return ( 
        <div className="textarea">
            <label>
                <textarea
                    placeholder="&nbsp;"
                >
                </textarea>
                <span>{text}</span>
            </label>
        </div>
     );
}
 
export default TextBox;