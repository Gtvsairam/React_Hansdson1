import React from "react";
// import App from "../App";

function showFunctionalBox(){
    return(
        <div className="second_box">
         <h2 className="content1">This is created using Functional component</h2>
            <p className="external_css1">This is done using external CSS</p>
            <p style={{color:"blue"}}> This is done using Inline CSS</p>
            
        </div>
    )
}
export default showFunctionalBox