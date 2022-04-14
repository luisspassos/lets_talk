import { useState } from 'react';
import { Tooltip } from '../Tooltip';
import { Avatar as ChakraAvatar, Text } from '@chakra-ui/react';
import { useAuth } from '../../contexts/AuthContext';

export function Avatar() {
  const [copiedUsername, setCopiedUsername] = useState(false);
  const { user } = useAuth();

  const username: string = user?.name;

  function handleCopyUsername(username: string) {
    setCopiedUsername(true);
    navigator.clipboard.writeText(username);
  }

  return (
    <Tooltip
      bg={copiedUsername ? 'green.500' : undefined}
      label={
        copiedUsername ? (
          'Copiado!'
        ) : (
          <Text isTruncated maxW='400px'>
            Copiar nome de usuário | {username}
          </Text>
        )
      }
      ariaLabel={
        copiedUsername
          ? 'Usuário copiado'
          : `Copiar Nome de usuário. ${username}`
      }
      closeOnClick={false}
      onClose={() => setCopiedUsername(false)}
    >
      <ChakraAvatar
        cursor='pointer'
        src={user?.picture ?? undefined}
        onClick={() => handleCopyUsername(username)}
      />
    </Tooltip>
  );
}