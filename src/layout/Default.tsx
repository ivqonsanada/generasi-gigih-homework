import { Box, Flex } from '@chakra-ui/react';
import Footer from 'components/footer';
import Header from 'components/header';
import React from 'react';

interface DefaultLayoutParams {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutParams) => (
  <Flex bg="gray.900" direction="column">
    <Header />
    <Box color="gray.300">{children}</Box>
    <Footer />
  </Flex>
);

export default DefaultLayout;
