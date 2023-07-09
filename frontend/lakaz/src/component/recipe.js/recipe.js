import React from "react";
import { useParams } from "react-router-dom";

const Recipe = () => {

    const params = useParams();
    const id = params.id;

    return (
        <div>
            <h1>Recette de : {id}</h1>
        </div>
    );
    
}

export default Recipe;