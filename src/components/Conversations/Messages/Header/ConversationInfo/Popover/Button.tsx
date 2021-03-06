import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

type ButtonProps = {
  text: string;
} & ChakraButtonProps;

export function Button({ text, ...rest }: ButtonProps) {
  return (
    <ChakraButton variant='ghost' fontWeight={400} pl='13px' {...rest}>
      {text}
    </ChakraButton>
  );
}
