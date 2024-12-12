import React from "react";

const Element = (props) => {
    return (
        <div
        onClick={props.onClick}
        style={{
            border:"3px solid #d8bfd8",
            height:'100px',
            width:'100px',
            display:'flex',
            justifyContent:"center",
            alignItems:"center",
            color : "white"
        }}
        className="element"
        >
            <h5>{props.value}</h5>
        </div>
    );
}

export default Element;