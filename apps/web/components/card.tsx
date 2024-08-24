"use client";
import { Box, Flex, Text, Button, HStack } from "@chakra-ui/react";

type CardProps = {
  title: string;
  description: string;
  buttonText: string;
};

function Card({ title, description, buttonText }: CardProps) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      minH="xxs"
      p={4}
      bg="white"
      boxShadow="md"
    >
      <Flex direction="column" align="flex-start" justify="center" p={4}>
        <Text fontSize="lg" fontWeight="bold" mb={2}>
          {title}
        </Text>
        <Text fontSize="md" color="gray.600" mb={4}>
          {description}
        </Text>
        <HStack justify="flex-end" w="100%" pos="relative" top="10px">
          <Button variant="solid" colorScheme="yellow" size="sm">
            {buttonText}
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}

export default Card;
