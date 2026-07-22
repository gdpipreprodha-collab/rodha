// src/pages/Home.tsx
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import SuccessStories from "../components/SuccessStories";

import StatsSection from "../components/StatsSection";
import MockPrograms from "../components/MockPrograms";
import ComparisonTable from "../components/ComparisonTable";
import ScoreCard from "../components/ScoreCard";
import Faculty from "../components/Faculty";
import Testimonials from "../components/Testimonials";
import CatMockBanner from "../components/CatMockBanner";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import HomepagePopup from "@/components/HomepagePopup";

export default function Home() {
  return (
    <>
      <HomepagePopup />
      <Header />
      <HeroSection />
      <SuccessStories />
      <WhyChooseUs />
      <StatsSection />
      <MockPrograms />
      <ComparisonTable />
      <ScoreCard />
      <Faculty />
      <Testimonials />
      <CatMockBanner />
      <ContactForm />
      <Footer />
    </>
  );
}
