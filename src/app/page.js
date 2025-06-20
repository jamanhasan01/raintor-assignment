import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsCards from "@/components/SkillsCards";
import WorkProcessSection from "@/components/WorkProcessSection";


export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <SkillsCards></SkillsCards>
      <PortfolioSection></PortfolioSection>
      <WorkProcessSection></WorkProcessSection>
      <ContactSection></ContactSection>
    </div>
  );
}
