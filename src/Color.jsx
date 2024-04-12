import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
const Color = ({ color }) => {
  return (
    <Flex alignItems="center" gap={2}>
      <Box height="20px" width="20px" borderRadius="50%" bgColor={color}></Box>
      <Text>{color} 0-50</Text>
    </Flex>
  );
};

export default Color;
