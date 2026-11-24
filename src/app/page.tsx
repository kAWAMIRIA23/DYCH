import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ParentAlerts } from "@/components/ParentAlerts";
import { About } from "@/components/About";
import { Solutions } from "@/components/Solutions";
import { Integration } from "@/components/Integration";
import { Trust } from "@/components/Trust";
import { Footer } from "@/components/Footer";

/* Section grounds alternate so the page reads in bands:
   teal hero, violet parents, paper about, cream solutions, teal how-it-works,
   paper trust, deep-teal contact. */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ParentAlerts />
        <About />
        <Solutions />
        <Integration />
        <Trust />
      </main>
      <Footer />
    </>
  );
}
