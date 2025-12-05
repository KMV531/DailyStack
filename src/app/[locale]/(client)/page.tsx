import { AboutSection } from "@/Sections/About";
import { ActionSection } from "@/Sections/Action";
import { HeroSection } from "@/Sections/Hero";
import { MethodsSection } from "@/Sections/Methods";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <MethodsSection />
      <ActionSection />
    </div>
  );
}
