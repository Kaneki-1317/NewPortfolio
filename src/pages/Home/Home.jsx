import MainLayout from "../../components/layout/MainLayout/MainLayout";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Technologies from "../../sections/Technologies/Technologies";
import Projects from "../../sections/Projects/Projects";
import Contact from "../../sections/Contact/Contact";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </MainLayout>
  );
}

export default Home;
