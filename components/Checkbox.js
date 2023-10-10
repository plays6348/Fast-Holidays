import React, { useCallback, useRef, useState } from "react";

const Checkbox = ({handleClick,label, newChecked}) => {

    // const handleCheck  = useCallback(() => {
    //     isChecked.current = !isChecked.current;
    //     console.log(isChecked.current.checked)
    //   })

    return (
        <div>
            <input
                type="checkbox"
                defaultChecked={newChecked} 
                onClick={(e)=>handleClick(e)}
            />
            <label htmlFor={label}>{label}</label>
      </div>
    )
}
export default Checkbox