import { useState } from "react"
import toast from "react-hot-toast";
import { useAuthAtom } from "../store/atoms/AuthAtom.js";


const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} = useAuthAtom();
  const logout = async() => {
    setLoading(true);
    try{
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {"Content-Type": "application/json"}
      })

      const data = await res.json();
      if(data.error){
        throw new Error(data.error)
      }

      localStorage.removeItem("chat-user")
      setAuthUser(null)
      
    } catch(error){
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  }

  return {logout, loading}
}

export default useLogout;
