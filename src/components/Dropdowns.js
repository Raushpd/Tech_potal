import React, { useState, useEffect } from "react";

function Dropdown(props) {
    return(
        <select type="text" 
            placeholder={props.placeholder}
            onChange={props.change}
            value={props.value} 
            id="compSelect">
                <option>Select</option>
                {props.static !== "true" ? props.arrayChoices?.map(({ id, data }) => (
                <option key={id}>{data.name}</option>
                )) : 
                props.staticChoices.map((mode) => (
                    <option key={mode}>{mode}</option>
                ))
            
            }
        </select>
    )
}

export default Dropdown;