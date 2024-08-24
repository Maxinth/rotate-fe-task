"use client";
import { Box, Button, Flex, Text, Link } from "@chakra-ui/react";
import React from "react";
import { LuRotate3D } from "react-icons/lu";
const Sidebar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="100vh"
      w="20%"
      zIndex={"200"}
      bg="gray.800"
      color="white"
      p="4"
    >
      <Flex
        as="h2"
        fontSize="lg"
        fontWeight="bold"
        mb="4"
        padding={"20px"}
        borderBottom={"1px solid grey"}
        justifyContent={"flex-start"}
        alignItems={"center"}
        gap={"5px"}
      >
        <LuRotate3D size={"30px"} color="yellow" /> Rowt8
      </Flex>
      <Flex
        marginTop="50px"
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Link
          p={"10px"}
          cursor={"pointer"}
          borderRadius={"8px"}
          _hover={{
            backgroundColor: "yellow.300",
            color: "black",
          }}
          w="full"
          mb="2"
          fontSize={"18px"}
          href="/"
        >
          Home
        </Link>
        <Link
          p={"10px"}
          cursor={"pointer"}
          borderRadius={"8px"}
          _hover={{
            backgroundColor: "yellow.300",
            color: "black",
          }}
          w="full"
          mb="2"
          fontSize={"18px"}
          href="/users-data"
        >
          Data
        </Link>
        <Link
          p={"10px"}
          cursor={"pointer"}
          borderRadius={"8px"}
          _hover={{
            backgroundColor: "yellow.300",
            color: "black",
          }}
          w="full"
          mb="2"
          fontSize={"18px"}
          href="/roles"
        >
          Form
        </Link>
      </Flex>
    </Box>
  );
};

export default Sidebar;
