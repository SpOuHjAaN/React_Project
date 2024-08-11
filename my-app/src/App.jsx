import { useState } from "react";
import { JiocinemaSeries } from "./components/JiocinemaSeries";
import { Login } from "./components/login";
import "./components/jiocinema.css";

export const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <section className="container">
      {isLoggedIn ? (
        <>
          <h1 className="card-heading">List Of Best JioCinema Series.</h1>
          <JiocinemaSeries />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </section>
  );
};

// This is the expression of use dynamic Values ,Expressions,Functions Rule.

// const NetflixSeries = () => {
//   const name = "Cricket";
//   const Cricketer="MSD";
//   const Rating = "10";
//   let age=16;
//   const returngenre = () =>{
//     const genre="Pooja";
//     return genre;

//   }
//   return(
//     <div>
//       <h2>Name:{name}</h2>
//       <h1>Cricketer:{Cricketer}</h1>
//       <h2>Rating:{Rating}</h2>
//       <h2>luckynumber:{4+3}</h2>  
//       <h2>Genre:{returngenre()}</h2>  
//       <button>{age >= 18 ? "Watch Now" : "Not Available"}</button> 
//     </div>
//   )
// }