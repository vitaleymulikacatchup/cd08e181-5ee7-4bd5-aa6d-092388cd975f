"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: "funAndTrendy",
      colorTemplate: 1,
      textAnimation: "slide",
    }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "hero", id: "hero" },
            { name: "about", id: "about" },
            { name: "how-to-buy", id: "how-to-buy" },
            { name: "tokenomics", id: "tokenomics" },
            { name: "footer", id: "footer" },
          ]}
          logoSrc="/images/logo.svg"
          logoAlt="Fungle Fruits Logo"
          brandName="Fungle Fruits"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to Fungle Fruits"
          description="Join the fun with our alien mushroom mascot while you dive into the world of meme coins!"
          primaryButtonText="Buy Now"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about">
        <CtaAbout
          title="Get to Know Us"
          descriptions={[
            "Discover our mission and vision.",
            "Join a community driven by nostalgia and fun.",
            "Explore our innovative meme coin strategies."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics">
        <PatternTokenomics
          title="Our Tokenomics"
          description="Understand our token distribution and the mechanics behind our ecosystem."
          kpiItems={[
            { value: "50%", description: "Liquidity" },
            { value: "30%", description: "Development" },
            { value: "20%", description: "Marketing" },
          ]}
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: "Products", items: [{ label: "Fruits", onClick: () => {} }, { label: "Berries", onClick: () => {} }] },
            { title: "Community", items: [{ label: "Discord", onClick: () => {} }, { label: "Twitter", onClick: () => {} }] },
            { title: "Support", items: [{ label: "Help Center", onClick: () => {} }, { label: "Contact Us", onClick: () => {} }] },
          ]}
          copyrightText="© 2023 Fungle Fruits"
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}