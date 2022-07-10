import React from "react";
import { Text, Box, Container, Center } from "@chakra-ui/react";

export default function Experience() {
  return (
    <Box color="white">
      <Center textTransform="uppercase" fontWeight="bold" fontsize="64">
        <Text
          p="4"
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize={["2xl", "3xl"]}
          fontWeight=""
        >
          Work Experience
        </Text>
      </Center>
      <Center p="4">
        <Box
          width="100%"
          color="white"
          rounded="lg"
          bg="#1b1b1b36"
          boxShadow="xl"
          p={4}
        >
          <Text fontWeight="bold">Kineto Films, Co-owner CEO:</Text>
          <Text>Jan 2017 – March 2020</Text>
          <Container color="white">
            Kineto Films specialized in high quality video, content marketing
            and storytelling. It helped its clients grow and thrive in a social
            media connected world.
          </Container>
        </Box>
      </Center>
      <Center p="4">
        <Box
          width="100%"
          color="white"
          rounded="lg"
          bg="#1b1b1b36"
          boxShadow="xl"
          p={4}
        >
          <Text fontWeight="bold"> Polyform US, Manufacturing Engineer</Text>
          <Text> March 2015 – Dec 2017</Text>
          <Container>
            Created complex kinematic assemblies of rotomolding machines.
            Designed a new production line that included oversight for the
            entire project. Managed multiple projects for instance a
            factory-wide IoT system, with custom hardware and sensors to gain
            unique production insight.
          </Container>
        </Box>
      </Center>
    </Box>
  );
}
