import React from "react";
import Header from "../layout/Header";
import { ProjectOne , ProjectTwo, ProjectThree, ProjectZero } from "../components/ProjectContent";
import Additionnal from "../components/Additional";
import Skills from "../components/Skills";

function Home() {
  return (
    <>
      <main className="main">
        <div className="main__container">
        <section className="header slide"> <Header /></section>
        <section className="project projectZero slide"> <ProjectZero /></section>
        <section className="project slide"> <ProjectOne /></section> 
        <section className="project projectTwo slide"> <ProjectTwo /></section>
        <section className="project projectThree slide"> <ProjectThree /></section>
        <section className="additional slide"> <Additionnal /></section>
        <section className="skills slide"> <Skills /></section>
      
        </div>
   
      </main>
      
    </>
  );
}

export default Home;