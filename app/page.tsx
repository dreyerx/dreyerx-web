'use client'
import HeroSection from "@/components/section/HeroSection";
import Header from "@/components/Header";
import { Box, Flex } from "@chakra-ui/react";
import AboutSection from "@/components/section/AboutSection";
import HeroDecoration from "@/components/decoration/HeroDecoration";
import FooterSection from "@/components/section/FooterSection";
import HomeEcosystemSection from "@/components/section/HomeEcosystemSection";

export default function Home() {
  return (
    <>
      <Header />
      <Flex flexDirection={"column"} my={5}>
        {/* <HeroDecoration /> */}
        <HeroSection />
        <AboutSection />
        <HomeEcosystemSection />
      </Flex>
      <FooterSection />

    </>
  );
}
