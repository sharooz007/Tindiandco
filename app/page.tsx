import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import Categories from "@/components/Categories";
import Benefits from "@/components/Benefits";
import WhyChooseUs from "@/components/WhyChooseUs";
import Connect from "@/components/Connect";
import ParentCompany from "@/components/ParentCompany";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* Color-block scroll theme switch: cream / green / green / cream / green / cream / green */}
        <Hero /> {/* cream */}
        <Marquee /> {/* green */}
        <Story /> {/* green */}
        <Categories /> {/* cream */}
        <Benefits /> {/* green */}
        <WhyChooseUs /> {/* cream */}
        <Connect /> {/* green */}
        <ParentCompany /> {/* cream */}
      </main>
      <Footer /> {/* green-deep */}
    </>
  );
}
