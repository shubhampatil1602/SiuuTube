import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomDataForLiveChats } from "../utils/data";

const LiveChats = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.chat.messages);

  useEffect(() => {
    const id = setTimeout(() => {
      dispatch(addMessage(generateRandomDataForLiveChats()));
    }, 1200);
    return () => clearTimeout(id);
  });
  return (
    <div className='w-full h-full flex flex-col justify-end bg-white dark:bg-zinc-900'>
      <div className='p-2 flex flex-col !overflow-scroll'>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message.name}
            message={message.message}
          />
        ))}
      </div>
      <div className='w-full border-t border-gray-300 dark:border-zinc-700 py-3 px-6 flex gap-2 bg-white dark:bg-zinc-900'>
        <form
          className='w-[90%]'
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "You", message: input }));
            setInput("");
          }}
        >
          <input
            type='text'
            className='border-none outline-none bg-white dark:bg-zinc-800 shadow dark:shadow-zinc-900 px-3 py-1.5 rounded-3xl w-full text-zinc-900 dark:text-zinc-100 placeholder:text-gray-400 dark:placeholder:text-zinc-400'
            placeholder='Chat...'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </form>
        <button
          className='bg-white dark:bg-zinc-800 shadow dark:shadow-zinc-900 h-8 w-8 rounded-full text-zinc-900 dark:text-zinc-100'
          onClick={(e) => {
            e.preventDefault();
            dispatch(addMessage({ name: "You", message: "❤️" }));
          }}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default LiveChats;

const ChatMessage = ({ name, message }) => {
  return (
    <div className='flex items-center gap-2 p-2 rounded-md'>
      <div className='h-6 w-6 rounded-full text-sm flex items-center justify-center font-semibold bg-gray-300 dark:bg-zinc-700 text-gray-700 dark:text-zinc-200 shadow dark:shadow-zinc-900'>
        {name[0]}
      </div>

      <h5 className='font-semibold text-sm text-zinc-900 dark:text-zinc-100'>
        {name}
      </h5>
      <p className='text-sm font-medium text-gray-500 dark:text-zinc-400 tracking-tight'>
        {message}
      </p>
    </div>
  );
};
