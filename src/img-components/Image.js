import React, {useState, useEffect} from "react";

function Image(props){
    // console.log(props);
    // console.log(props.data.date);
    return (
        <div className="imgContainer">
            <div className="title">
                <h1>{props.data.title}</h1>
            </div>
            <div>
                <h2>Date: {props.data.date}</h2>
            </div>
            <div className="description">
                <h3>By: {props.data.copyright}</h3>
                <p>{props.data.explanation}</p>
            </div>
             <div className="image">
                 <img src={props.data.hdurl} alt="A photo of {props.data.title}"/>
             </div>
        </div>
    );

    

}

export default Image;