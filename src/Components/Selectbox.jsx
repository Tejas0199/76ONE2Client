import React from "react";

const Selectbox = ({value, label, id, name, handler, className, opt }) => {

    return (
        <div>
            {label && <label>{label}</label>}
            <select value={value} name={name} id={id} className={className} onChange={handler}>
                {
                    opt.map((items, index) => {
                        return <option value={(index === 0 ? "" : items)}>{items}</option>
                    })
                }
            </select>
        </div>
    )

}

export default Selectbox