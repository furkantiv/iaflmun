import Hero from "@/components/Hero";
import Letter from "@/components/Letter";
import Sponsors from "@/components/Sponsors";
import ApplyCTA from "@/components/ApplyCTA";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Sponsors />
        <Letter />
        <ApplyCTA />
      </main>
    </div>
  );
}
