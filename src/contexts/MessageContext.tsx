import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useConversations } from './ConversationsContext';

type MessageProviderProps = {
  children: ReactNode;
};

type MessageDataType = {
  photoURL: string | null;
  name: string;
};

type MessageContextType = {
  messageData: MessageDataType | undefined;
};

export const MessageContext = createContext({} as MessageContextType);

export function MessageProvider({ children }: MessageProviderProps) {
  const [messageData, setMessageData] = useState<MessageDataType>();

  const { conversations } = useConversations();

  useEffect(() => {
    const [lastConversation] = conversations;

    setMessageData({
      photoURL: lastConversation?.photoURL,
      name: lastConversation?.name,
    });
  }, [conversations]);

  return (
    <MessageContext.Provider value={{ messageData }}>
      {children}
    </MessageContext.Provider>
  );
}

export function useMessage() {
  const data = useContext(MessageContext);

  return data;
}
