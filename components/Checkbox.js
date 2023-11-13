import React, { useCallback, useRef, useState } from "react";

const Checkbox = ({handleClick,label, newChecked}) => {
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