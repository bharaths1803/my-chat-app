import React from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import { useAuthAtom } from '../../store/atoms/AuthAtom.js';
import { userConversationAtom } from '../../store/atoms/userConversationAtom';
import { extractTime } from '../../utils/extractTime';

export const Message = ({message}) => {
  const formattedTime = extractTime(message.createdAt);
  const {authUser} = useAuthAtom()
  const {selectedConversation} = userConversationAtom()
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";
  const shakeClass = message.shouldShake? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
        <img src= {profilePic} alt="chat bubble component" />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass}`}>{message.message}</div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}
