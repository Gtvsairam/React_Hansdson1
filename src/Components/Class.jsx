import React from "react";

class Class extends React.Component{
    render(){
      return(
        <>
        <div className="first_box">
            <h2 className="content1">This is created using Class component</h2>
            <p className="external_css">This is done using external CSS</p>
            <p style={{color:"red"}}> This is done using Inline CSS</p>
        </div>
        </>
      )
    }
}
export default Class;
