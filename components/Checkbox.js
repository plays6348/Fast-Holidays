import React, { useState } from "react";

const Checkbox = ({handleClick,label}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div>
            <input
                type="checkbox"
                defaultChecked={isChecked} 
                onClick={()=>{handleClick(); setIsChecked(!isChecked)}}
            />
            <label htmlFor={label}>{label}</label>
      </div>
    )
}
export default Checkbox