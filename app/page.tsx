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
  const heroRef = useRef()
  const aboutRef = useRef()
  const homeEcosystemRef = useRef()
  const gettingStartedRef = useRef()

  return (
    <>
      <Header />
      <Flex flexDirection={"column"} my={5}>
        <HeroSection ref={heroRef} />
        <AboutSection />
        <HomeEcosystemSection />
        <GettingStartedSection />
        <RoadmapSection />
      </Flex>
      <FooterSection />
    </>
  );
}
