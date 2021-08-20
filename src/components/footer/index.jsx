import { Center, HStack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

const Footer = () => (
  <Center bg="black" h="100px" color="gray.300" padding="20px">
    <HStack>
      <Text>
        Made in a Panic.
      </Text>
      <Icon icon="emojione:sad-but-relieved-face" inline />
    </HStack>
  </Center>
);

export default Footer;
