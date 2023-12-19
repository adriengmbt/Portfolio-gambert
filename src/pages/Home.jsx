import React from "react";
import Header from "../layout/Header";
import { ProjectOne , ProjectTwo, ProjectThree } from "../components/ProjectContent";

function Home() {
  return (
    <>
      <main className="main">
        <div className="main__container">
        <section className="header slide"> <Header /></section>
        <section className="project slide"> <ProjectOne /></section> 
        <section className="project projectTwo slide"> <ProjectTwo /></section>
        <section className="project projectThree slide"> <ProjectThree /></section>
        
        </div>
   
      </main>
      
    </>
  );
}

export default Home;