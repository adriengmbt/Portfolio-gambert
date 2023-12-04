import React from "react";
import Header from "../layout/Header";
import Presentation from "../components/ProjetOne";
function Home() {
  return (
    <>
      <main className="main">
        <div className="main__container">

        <section className="header slide"> <Header /></section>
        <section className="presentation slide"><Presentation /></section>

        </div>
   
      </main>
      
    </>
  );
}

export default Home;