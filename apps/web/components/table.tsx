"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useBreakpointValue,
} from "@chakra-ui/react";

function DataTable({
  data,
  columns,
}: {
  data: any[];
  columns: { header: string; accessor: string }[];
}) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <TableContainer>
      <Table
        variant="striped"
        colorScheme="yellow"
        size={isMobile ? "sm" : "md"}
      >
        <Thead>
          <Tr>
            {columns.map((column, index) => (
              <Th key={index} fontSize={isMobile ? "xs" : "md"}>
                {column.header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {data.map((row, index) => (
            <Tr key={index}>
              {columns.map((column, columnIndex) => (
                <Td key={columnIndex} fontSize={isMobile ? "xs" : "md"}>
                  {row[column.accessor]}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default DataTable;
