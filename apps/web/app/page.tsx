"use client";
import { Grid, Box, Flex } from "@chakra-ui/react";
import Card from "../components/card";
import { cardData } from "../data";
import DraftCard from "../components/draft-card";

export default function Home() {
  return (
    <Box>
      <Grid p="8" bg="gray.50" templateColumns="repeat(3, 1fr)" gap="4">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
          />
        ))}
      </Grid>
      <Flex wrap="wrap" gap="4" p="12">
        <DraftCard
          payPeriod="Nov 28 - Dec 4"
          type="Regular"
          approvedDate="Aug 06, 2021 (7:00 PM)"
          payDay="Nov 2, 2022"
          status="Draft"
        />
        <DraftCard
          payPeriod="Nov 21 - Nov 27"
          type="Regular"
          approvedDate="Aug 13, 2021 (7:00 PM)"
          payDay="Nov 9, 2022"
          status="done"
        />
      </Flex>
    </Box>
  );
}
