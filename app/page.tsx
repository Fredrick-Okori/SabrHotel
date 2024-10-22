import Camp from "@/components/Camp";
import CTASection from "@/components/CTA";

import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

import { Literata } from 'next/font/google'

const literata = Literata({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Hero/>
      <Guide />
      <Camp />
      
      <GetApp />
      {/* <Features /> */}
      <CTASection/>
      
      
      
    </>
  );
}
