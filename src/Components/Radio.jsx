import React from "react";

const Radio = ({ label, name, handler, className }) => {
    return (
        <div>
            <input type="radio" name={name} className={className} onChange={handler}></input> {label && <label>{label}</label>}
        </div>
    )

}

export default Radio