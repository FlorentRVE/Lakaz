import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = ({onInput}) => {

    function inputHandler (event) {
        onInput(event.target.value);
      };

    return (

        <div className="">

            <div className="search bg-lime-200 w-full">
                <TextField
                id="outlined-basic"
                onChange={inputHandler}
                variant="outlined"
                fullWidth
                label="Rechercher une recette"
                />
            </div>
            
        </div>
    );
    
}

export default SearchBar;