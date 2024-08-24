"use client";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      position="fixed"
      top="0"
      right="0"
      width="100%"
      bg="gray.100"
      height="90px"
      align="center"
      justify="left"
      textAlign={"right"}
      zIndex={100}
      px="4"
    >
      <Text
        fontSize="lg"
        fontWeight="bold"
        width={"100%"}
        paddingRight={"20px"}
      >
        Hi there! 👋
      </Text>
    </Flex>
  );
};

export default Header;
