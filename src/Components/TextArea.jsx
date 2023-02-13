import React from "react";

const TextArea = ({value, label, name, handler, className }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <textarea value={value} name={name} className={className} onChange={handler} rows="5" placeholder="MAX 50 CHARACTERS"></textarea>
        </div>
    )

}

export default TextArea 
