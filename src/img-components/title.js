import React, {useState, useEffect} from "react";
import './Image.css';
import './textContent.css';

function Text(props){
    console.log(props);
    return (
        <div className="title">
            <h1 className="imgTitle">{props.title}</h1>
        </div>
    );
}

export default Text;