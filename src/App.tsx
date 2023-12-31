
import { Layout } from "./components/Layout";
import { Box, Button, Center, ChakraProvider,
  Input,
 } from "@chakra-ui/react";



function App() {
  return (
    <ChakraProvider>
      
      <Box minHeight='100vh' backgroundColor='#9413dc' padding='15px'>
      <Box backgroundColor='#ffffff' borderRadius='25px' padding='25px'>
      <Center>
      <h1> Faça o login</h1>
      </Center>
      <Input placeholder="email" />
      <Input placeholder="password" />
      <Center>
        <Button colorScheme="teal" size='sm' width='100%' marginTop='5px'>
          Entrar
        </Button>
      </Center>
      </Box>
      </Box>
      
      
      
      

    
      
    </ChakraProvider>
  );
}

export default App;
