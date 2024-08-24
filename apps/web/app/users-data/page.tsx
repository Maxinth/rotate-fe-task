"use client";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import DataTable from "../../components/table";
import { tableData, tableColumns } from "../../data";

function Table() {
  return (
    <Box p={4} maxW="container.md" mx="auto" my="20px">
      <Flex justify="space-between" align="center" mb={4}>
        <Text fontSize="lg" fontWeight="bold">
          Users
        </Text>
      </Flex>
      <DataTable data={tableData} columns={tableColumns} />
    </Box>
  );
}

export default Table;
