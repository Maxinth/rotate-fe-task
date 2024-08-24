import React from "react";
import {
  Box,
  Flex,
  Text,
  Badge,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

type DraftCardProps = {
  payPeriod: string;
  type: string;
  approvedDate: string;
  payDay: string;
  status: string;
};

const DraftCard = ({
  payPeriod,
  type,
  approvedDate,
  payDay,
  status,
}: DraftCardProps) => {
  const cardBg = useColorModeValue("white", "gray.700");
  const cardBorder = useColorModeValue("gray.200", "gray.600");

  return (
    <Box
      p="4"
      bg={cardBg}
      borderRadius="md"
      borderWidth="1px"
      borderColor={cardBorder}
      shadow="sm"
      width="full"
      maxW="lg"
    >
      <VStack align="start" spacing={3}>
        <Flex justify="space-between" width="full">
          <Text fontWeight="bold">Pay Period</Text>
          <Text>{payPeriod}</Text>
        </Flex>
        <Flex justify="space-between" width="full">
          <Text fontWeight="bold">Type</Text>
          <Text>{type}</Text>
        </Flex>
        <Flex justify="space-between" width="full">
          <Text fontWeight="bold">Approved Day</Text>
          <Text>{approvedDate}</Text>
        </Flex>
        <Flex justify="space-between" width="full">
          <Text fontWeight="bold">Pay Day</Text>
          <Text>{payDay}</Text>
        </Flex>
        <Flex justify="space-between" width="full">
          <Text fontWeight="bold">Status</Text>
          <Badge
            colorScheme={status === "Draft" ? "blue" : "green"}
            borderRadius={"8px"}
            padding={"5px"}
          >
            {status}
          </Badge>
        </Flex>
      </VStack>
    </Box>
  );
};

export default DraftCard;
