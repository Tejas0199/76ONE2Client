import React from "react";

const Input = ({value, label,error, name, type = "text", handler, className, placeholder }) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input type={type} value={value} name={name} className={error ? className + " border border-danger" : className} onChange={handler} placeholder={placeholder}></input>
            {error && <p style={{color : "red"}}>{error}</p>}
        </div>
    )

}

export default Input