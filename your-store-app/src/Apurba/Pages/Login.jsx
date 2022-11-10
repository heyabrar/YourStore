import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const users = JSON.parse(localStorage.getItem("users")) || [];
  //   console.log(users);
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      //   alert(JSON.stringify(values, null, 2));
      const { email, password } = values;
      if (email) {
        console.log(email, password);
        const validate = users.filter(
          (user) => user.email == email && user.password == password
        );
        console.log(validate);
        if (validate.length == 0) alert("Invalid Username or Password");
        else navigate("/");
      }
    },
  });
  return (
    <Flex bg='gray.100' align='center' justify='center' h='100vh'>
      <Box bg='white' p={6} rounded='md'>
        <form onSubmit={formik.handleSubmit}>
          <VStack spacing={4} align='flex-start' maxW={"300px"}>
            <Heading size={"xl"}>Log In</Heading>
            <Text
              pb={"15px"}
              mb={"15px"}
              borderBottom={"1px solid rgba(0,19,37,.16)"}
            >
              To quickly find your favourites items, saved addresses and
              payments.
            </Text>

            <FormControl>
              <FormLabel htmlFor='email'>Email Address</FormLabel>
              <Input
                id='email'
                name='email'
                type='email'
                variant='filled'
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor='password'>Password</FormLabel>
              <Input
                id='password'
                name='password'
                type='password'
                variant='filled'
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>

            <Button
              type='submit'
              bgColor={"#fc2779"}
              color={"white"}
              width='full'
              _hover={{
                bgColor: "#fb5293",
                color: "white",
              }}
            >
              Log in
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;
