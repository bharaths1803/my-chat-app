import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
import {useState} from "react"
import useGetConversations from "../../hooks/useGetConversations"
import { userConversationAtom } from "../../store/atoms/userConversationAtom"
import toast from 'react-hot-toast';

export const SearchInput = () => {
  const [search, setSearch] = useState("");
  const {conversations} = useGetConversations();
  const {setSelectedConversation} = userConversationAtom();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error("Search term must be at least 3 characters long")
    }
    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }else {
      toast.error("No such user found")
    }
  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
      <input type="text" placeholder='Search...' className='input input-bordered rounded-full' value={search} onChange={(e) => setSearch(e.target.value)}/>
      <button className='btn btn-circle bg-sky-500 text-white' type='submit'>
      <IoSearchSharp className='w-6 h-6 outline-none'/>
      </button>
    </form>
  )
}