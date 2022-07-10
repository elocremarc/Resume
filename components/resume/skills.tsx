import React from "react";
import { Box, Text, Container, Center } from "@chakra-ui/react";

export default function Skills() {
  return (
    <>
      <Box color="white">
        <Center textTransform="uppercase" fontWeight="bold" fontsize="64">
          <Text
            p="4"
            bgGradient="linear(to-l, #7928CA,#FF0080)"
            bgClip="text"
            fontSize={["2xl", "3xl"]}
            fontWeight=""
          >
            Technical Skills
          </Text>
        </Center>
        <Center p="4">
          <Container
            width="100%"
            color="white"
            rounded="lg"
            bg="#1b1b1b36"
            boxShadow="xl"
            p="4"
          >
            Typescript, JavaScript, Solidity, React, Node.js, ES6, Next.js,
            Python, Ethers.js, Web3.js, ERC-20/721/1155, Hardhat, ChakraUI, MUI,
            Bootstrap, CSS, HTML, Linux, Bash, Raspberry Pi, Arduino,
            Videography, Video Marketing, Manufacturing Engineering, 3D
            Modeling, CAD/CAM, IoT, Electronics, Robotics, Product Development,
            Lean Manufacturing, CNC Programming, 3D Printing.
          </Container>
        </Center>
      </Box>
    </>
  );
}
