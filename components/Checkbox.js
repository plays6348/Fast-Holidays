import React, { useCallback, useRef, useState } from "react";

const Checkbox = ({handleClick,label}) => {
    const isChecked = useRef(false);

    const handleCheck  = useCallback(() => {
        isChecked.current = !isChecked.current;
        console.log(isChecked.current.checked)
      })

    return (
        <div>
            <input
                type="checkbox"
                checked={isChecked.current} 
                onClick={()=>handleClick()}
                onChange={handleCheck}
            />
            <label htmlFor={label}>{label}</label>
      </div>
    )
}
export default Checkbox