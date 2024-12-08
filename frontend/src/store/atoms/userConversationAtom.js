import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export const ConversationAtom = atom({
  key: 'conversation',
  default: null
})

export const MessagesAtom = atom({
  key: 'messages',
  default: []
})

export const userConversationAtom = () => {
  const selectedConversation = useRecoilValue(ConversationAtom)
  const setSelectedConversation = useSetRecoilState(ConversationAtom)
  const messages  = useRecoilValue(MessagesAtom)
  const setMessages = useSetRecoilState(MessagesAtom)
  return {selectedConversation, setSelectedConversation, messages, setMessages}
}




