import { Box, Center, Heading, HStack, Link, Text } from "@chakra-ui/react";
import { MdSignpost } from "react-icons/md";

export const Error404 = () => {
  return (
    <>
      <HStack padding="25px">
        <Center>
          <MdSignpost
            style={{ width: "250px", height: "250px", color: "aqua" }}
          />
        </Center>
        <Box textAlign="center">
          <Heading>Error 404</Heading>
          <Text color="gray.600">
            This page no longer exists or the URL has changed.
          </Text>
          <Link href="/">Back to Homepage</Link>
        </Box>
      </HStack>
    </>
  );
};
