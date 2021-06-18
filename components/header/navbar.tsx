import {
  Box,
  Button,
  Select,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useColorModeValue as mode,
  Checkbox,
} from "@chakra-ui/react";
import * as React from "react";
import { FiSearch } from "react-icons/fi";

export default function Navbar() {
  return (
    <Box p="4" bgColor="gray.900">
      <Box mx="auto">
        <Stack
          spacing="5"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align={{ base: "flex-start", md: "center" }}
        >
          <HStack
            justify="flex-start"
            flex="1"
            w={{ base: "full", md: "auto" }}
            spacing={{ base: "2", md: "4" }}
          >
            <InputGroup maxW={{ md: "80" }} w="full">
              <InputRightElement color="gray.400">
                <FiSearch />
              </InputRightElement>
              <Input
                bg={mode("white", "gray.800")}
                placeholder="Search for parcel"
              />
            </InputGroup>
            <Button
              colorScheme="purple"
              flexShrink={0}
              fontWeight="bold"
              fontSize="sm"
            >
              Search
            </Button>
          </HStack>
          <Checkbox colorScheme="cyan" isChecked={true}>
            For sale
          </Checkbox>
          <Checkbox colorScheme="cyan" isDisabled>
            Events
          </Checkbox>
          <Checkbox colorScheme="cyan" isDisabled>
            Foot traffic
          </Checkbox>

          <Select placeholder="Price" isDisabled maxW="10rem">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Stack>
      </Box>
    </Box>
  );
}
