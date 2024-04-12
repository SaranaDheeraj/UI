import React from "react";
import { Flex, Text, Card } from "@chakra-ui/react";

const MinCard = ({ heading, value }) => {
  return (
    <Card boxShadow="sm">
      <Flex flexDir="column">
        <Text color="gray">{heading}</Text>
        <Text mb={4}>{value}</Text>
      </Flex>
    </Card>
  );
};

export default MinCard;
