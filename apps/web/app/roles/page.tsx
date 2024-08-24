"use client";
import {
  Box,
  Flex,
  FormLabel,
  FormControl,
  Input,
  Select,
  Button,
  FormErrorMessage,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";

interface IHandle {
  value: React.SetStateAction<string>;
}

function UserForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    role?: string;
  }>({});

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Call API or perform form submission logic here
    console.log("Form submitted:", { name, email, role });
  };

  const handleNameChange = (event: { target: IHandle }) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: { target: IHandle }) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event: { target: IHandle }) => {
    setRole(event.target.value);
  };

  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box
      p={isMobile ? 2 : 4}
      maxW={isMobile ? "xs" : "md"}
      mx="auto"
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      mt="40px"
    >
      <Flex justify="center" align="center" mb={isMobile ? 2 : 4}>
        <Box fontSize={isMobile ? "md" : "lg"} fontWeight="bold">
          Add User
        </Box>
      </Flex>
      <form onSubmit={handleSubmit}>
        <FormControl isInvalid={!!errors.name} mb={isMobile ? 2 : 4}>
          <FormLabel fontSize={isMobile ? "sm" : "md"}>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="John Doe"
            size={isMobile ? "sm" : "md"}
          />
          {errors.name && (
            <FormErrorMessage fontSize={isMobile ? "xs" : "sm"}>
              {errors.name}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.email} mb={isMobile ? 2 : 4}>
          <FormLabel fontSize={isMobile ? "sm" : "md"}>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="johndoe@example.com"
            size={isMobile ? "sm" : "md"}
          />
          {errors.email && (
            <FormErrorMessage fontSize={isMobile ? "xs" : "sm"}>
              {errors.email}
            </FormErrorMessage>
          )}
        </FormControl>

        <FormControl isInvalid={!!errors.role} mb={isMobile ? 2 : 4}>
          <FormLabel fontSize={isMobile ? "sm" : "md"}>Role</FormLabel>
          <Select
            value={role}
            onChange={handleRoleChange}
            size={isMobile ? "sm" : "md"}
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </Select>
          {errors.role && (
            <FormErrorMessage fontSize={isMobile ? "xs" : "sm"}>
              {errors.role}
            </FormErrorMessage>
          )}
        </FormControl>

        <Button
          type="submit"
          colorScheme="yellow"
          variant="solid"
          size={isMobile ? "sm" : "md"}
        >
          Add User
        </Button>
      </form>
    </Box>
  );
}

export default UserForm;
