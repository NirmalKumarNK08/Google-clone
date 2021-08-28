import './Home.css';
import { Link } from "react-router-dom";

function Home() {
   return (
     <div className="home">
      <h1>I am here</h1>
      <div className="home_header">
      <div className="header_left">
         <Link to="/about">About</Link>
         <Link to="/store">Store</Link>
      </div>
      <div className="header_right">
         <Link to="/gmail">Gmail</Link>
         <Link to="/images">Images</Link>
         {/* Icon */}
         {/*  */}
      </div>
      </div>
      <div className="home_body"></div>
     </div>
   );
}

export default Home;
