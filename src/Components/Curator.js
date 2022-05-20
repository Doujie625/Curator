import React from "react";
import Form from "./Form"

function Curator(props) {
    return (
        <div className="Curator">
            <main>
            <h1>Curator</h1> 
            <Form gallery={props.gallery} setGallery={props.setGallery}/>
            </main>
        </div>
    )
}
export default Curator;
