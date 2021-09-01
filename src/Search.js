import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";

function Search() {
   const [input, setInput] = useState("");
   const search = e => {
      e.preventDefault();
      console.log("Hit!!!!!")
   };

   return (
      <form className="search">
         <div className="search_input">
            <SearchIcon className="search_inputIcon"/>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <MicIcon/>
         </div>
         <div className="search_buttons">
            <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
            <Button variant="outlined">I'm feeling Lucky</Button>
         </div>
      </form>
   )
}

export default Search;