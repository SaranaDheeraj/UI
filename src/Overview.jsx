import React from "react";
import {
  Flex,
  Box,
  Card,
  CardHeader,
  Heading,
  Text,
  CardBody,
  Stack,
  Avatar,
  SimpleGrid,
  CircularProgress,
  CircularProgressLabel,
  Image,
} from "@chakra-ui/react";
import "./index.css";

import { EditIcon } from "@chakra-ui/icons";
import MinCard from "./MinCard";
import Color from "./Color";

const Overview = () => {
  return (
    <Flex gap={3}>
      <Card width="35%">
        <CardHeader>
          <Heading size="sm">
            <Text bgColor="gray.50" as="span" p={2}>
              My Information Overview
            </Text>
          </Heading>
        </CardHeader>
        <CardBody>
          <Stack>
            <Flex
              flexDir="column"
              gap={2}
              alignItems="center"
              justifyContent="center"
            >
              <Avatar
                size="xl"
                name="Christian Nwamba"
                src="https://bit.ly/code-beast"
              />
              <Text>
                Job Title: ReactJS Developer <EditIcon />
              </Text>
            </Flex>
            <Card p={3}>
              <SimpleGrid minChildWidth="40%" spacing="30px">
                <MinCard heading="User Name" value="annim" />
                <MinCard heading="Department" value="IT" />
                <MinCard heading="Office Location" value="Hyderabad" />
                <MinCard heading="IP Address" value="123.02.36.89" />
              </SimpleGrid>
            </Card>
            <Flex gap={3} mt={3}>
              <Color color="red" />
              <Color color="yellow" />
              <Color color="green" />
            </Flex>
            <Flex justifyContent="space-between" alignItems="center">
              <Image
                height="200px"
                width="100px"
                src="https://images-cdn.ubuy.co.in/634e8c0df8957469547832b8-plush-figure-toys-owl-plush-doll-cute.jpg"
              />
              <Flex
                alignItems="center"
                justifyContent="center"
                mt={4}
                mb={2}
                className="progressContainer"
              >
                <CircularProgress
                  value={44}
                  color="red"
                  size="120px"
                  thickness="12px"
                >
                  <CircularProgressLabel fontSize="md">
                    Score <br />
                    44%
                  </CircularProgressLabel>
                </CircularProgress>
              </Flex>
            </Flex>
          </Stack>
        </CardBody>
      </Card>
      <Box width="65%" height="100vh" position="relative" borderRadius="sm">
        <iframe
          title="YouTube Video"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QusJ4fpWQwA?si=mew33qkQYwGcFulS"
          frameBorder="0"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0 }}
        ></iframe>
      </Box>
    </Flex>
  );
};

export default Overview;
