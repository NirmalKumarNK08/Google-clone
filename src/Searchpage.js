import React from 'react'
import './Searchpage.css';
import { useStateValue } from "./Stateprovider";
import useGoogleSearch from './useGoogleSearch';
import { Link } from 'react-router-dom';
import Search from  "./Search";

function SearchPage() {
   const [{ term }, dispatch] = useStateValue();
   const {data} = useGoogleSearch(term);

   console.log(data);
   return (
     <div className="searchPage">
         <div className="searchPage_header">
            <Link to="/">
               <img
                  className="searchPage_logo"
                  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                  alt=""
               ></img>
            </Link>

            <div className="searchPage_head">
               <Search hideButtons />
            </div>
         </div>

         <div className="searchPage_results">
            
         </div>
     </div>
   );
}

export default SearchPage;
