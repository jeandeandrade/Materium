import React from "react";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero/hero";
import { Feats } from "@/components/feats/feats";
import { Footer } from "@/components/footer/footer";


export default function Home() {
  return (
    <div>
      <Header/>

        <Hero/>
      
      <Feats/>
      <Footer/>
    </div>
  );
}