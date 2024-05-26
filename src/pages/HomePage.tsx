import { Container } from "@mui/material";
import Hero from "../components/Hero";
import Technologies from "../components/tecnologias/Technologies";
import Projects from "../components/Projects";

function HomePage() {
  return (
    <>
      <Hero />
      <Container>
        <Technologies />
        <Projects />
      </Container>
    </>
  );
}

export default HomePage;
