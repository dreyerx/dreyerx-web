'use client'
import HeroSection from "@/components/section/HeroSection";
import Header from "@/components/Header";
import { Box, Flex } from "@chakra-ui/react";
import AboutSection from "@/components/section/AboutSection";
import HeroDecoration from "@/components/decoration/HeroDecoration";
import FooterSection from "@/components/section/FooterSection";
import HomeEcosystemSection from "@/components/section/HomeEcosystemSection";
import GettingStartedSection from "@/components/section/GettingStartedSection";
import { useRef } from "react";
import RoadmapSection from "@/components/section/RoadmapSection";

export default function Home() {
  console.log(`                                                 
                   WELCOME TO DREYERX APP

                          $$$$ ;xxx                          
                   xxx xXXX$$& ;;;++xx  +x                   
                $Xxxx xxxxXXX$ ;;;;++xxX+xxX$                
              $XxxxX +++xxxxX$ :;;;++xxX$xxxX$&              
             $XxxXX ++++++xxxX :++;++xxX$ xxXX$$             
           XXxxXX$$ ;;+++++xxX ::+x++xxX$ XXXXXX$&           
          xxxX      ;;;;++++xx ::::+xXX$$      $$$$          
         x  XXX$$$$$X;;;;;+++x :::;;;;;;;;;;;+++  $$         
          xxxxxxxxxX+;;;;;;+++ ;;;;;;;;;;;+++++++xx          
         x++++++++xx:;;;;;;;++  ;;;;;;;+++++++xxxxxX         
        x+;;;;;;+x;::::;;;;;     ;;+++++++xxxxxxXXXX$        
        +;;;;;x+;:::::::;;         ++xxxxxXXXXXXX$$$$&       
                                                             
       $$$$$XXXxxxxxxx++++         ;;:::::::;+x;;;;;+        
        $$XXXxxxx+++++;;;;;;     ;;;;;::::;x+;;;;;;+x        
         XXxxxx+++++;;;;;;;;;   +;;;;;;;:+x+++++++++         
          xxx++++++;;;;;;;;::: +++;;;;;;+Xxxxxxxxxx          
         ++  ++++;;;;;;;;::::: xx++;;;;;x$$$$$XXX X$         
          xxxx      $$XXx+:::: Xx++++;;;;      XX$$          
           $XxxxXXX $Xxx++x+:: Xxx+++++;; +xxXX$$            
             $XXXXX $Xxx++;++: $Xxx++++++ xxXX$&             
              &$$XX$XXXx++;;;; $Xxxxx+++ XXX$&&              
                &$$$$Xxx++;;;; &XXXxxxx+XX$&&                
                   $$  x+x+;;; &$$XXXx $$$                   
                          xxx+ $$$$`)
  return (
    <>
      <Header />
      <Flex flexDirection={"column"} my={5}>
        <HeroSection />
        <AboutSection />
        <HomeEcosystemSection />
        <GettingStartedSection />
        <RoadmapSection />
      </Flex>
      <FooterSection />
    </>
  );
}
