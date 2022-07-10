import React from "react";
import { Grid, Flex, Box, Center } from "@chakra-ui/react";
import Projects from "../components/resume/projects/projects";
import Experience from "../components/resume/experience";
import Skills from "../components/resume/skills";
import Education from "../components/resume/education";

export default function Resume() {
  return (
    <Box>
      <Box height="50px" />

      <Projects />
      <Center>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
          ]}
        >
          <Experience />
          <Box>
            <Skills />
            <Education />
          </Box>
        </Grid>
      </Center>
    </Box>
  );
}
