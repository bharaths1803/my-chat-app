import { useEffect, useState } from "react"
import { userConversationAtom } from "../store/atoms/userConversationAtom";
import toast from "react-hot-toast";
const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation} = userConversationAtom();


  useEffect(() => {

    const getMessages = async() => {
      setLoading(true);
      try{
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
  
        const data = await res.json();
        if(data.error){
          throw new Error(data.error)
        }
        setMessages(data)
      }catch(error){
        toast.error(error.message)
      }finally{
        setLoading(false)
      }
    }

    getMessages()

  }, [selectedConversation._id, setMessages]);
  return {messages, loading};
}

export default useGetMessages
