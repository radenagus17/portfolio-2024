import About from "@/components/page-home/about";
import Cta from "@/components/page-home/cta";
import Hero from "@/components/page-home/hero";
// import Reviews from "@/components/page-home/reviews";
import Services from "@/components/page-home/services";
import Work from "@/components/page-home/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Work />
      {/* <Reviews /> */}
      <Cta />
    </main>
  );
}
