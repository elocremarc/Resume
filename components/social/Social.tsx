import React from "react";
import { FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";
import { Icon } from "@chakra-ui/icon";
import { Box, Grid } from "@chakra-ui/layout";

export default function Social() {
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <Box>
          <a href="https://github.com/elocremarc" target="_blank">
            <Icon boxSize={["4", "6"]} as={FaGithub} />
          </a>
        </Box>
        <Box>
          <a href="https://twitter.com/Elocremarc" target="_blank">
            <Icon boxSize={["4", "6"]} as={FaTwitter} />
          </a>
        </Box>
        {/* <Box as="button">
          <a href="https://www.instagram.com/techwithcole/">
            <Icon boxSize={["4", "6"]} as={FaInstagram} />
          </a>
        </Box> */}
      </Grid>
    </>
  );
}
