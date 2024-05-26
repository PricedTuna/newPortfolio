import { Box, Button, Typography } from "@mui/material";

function Hero() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ bgcolor: "primary.dark" }}
    >
      <Box
        display="flex"
        gap={5}
        flexDirection={{ xs: "column", sm: "column", md: "row",}}
        justifyContent="center"
        alignItems="center"
        padding={5}
      >
        <Box padding={18} bgcolor="primary.light">
          Foto
        </Box>
        <Typography variant="h6" color="whitesmoke">
          Soy un apasionado por la tecnología y la resolución de problemas, lo
          que me llevó a elegir el camino del desarrollo de software. Encuentro
          fascinante el desarrollo de software en todas sus fases y creo
          firmemente que, gracias a mi experiencia en tecnologías web full
          stack, como JavaScript con TypeScript, Node.js, NestJS, React, y un
          amplio dominio de bases de datos tanto SQL como NoSQL, puedo ayudarte
          a diseñar y llevar a cabo soluciones a tus problemas o impulsar tus
          proyectos.
          <br />
          Me enorgullece saber que he formado parte de grandes equipos para
          desarrollar soluciones limpias y escalables, desde reuniones con el
          cliente para levantar requerimientos hasta el diseño y desarrollo de
          la solución. Estoy siempre en busca de nuevos retos y oportunidades
          para seguir creciendo y aprendiendo en este apasionante campo.
        </Typography>
      </Box>
    </Box>
  );
}

export default Hero;
