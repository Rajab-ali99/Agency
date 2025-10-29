import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";

const Button = ({text , onClick , type}) => {
  return (
    <button onClick={onClick} type={type} className="bg-emerald-500 cursor-pointer hover:bg-emerald-600 text-white px-6 py-3 rounded-full font-bold  transition">
    {text}
    <FiArrowUpRight className='inline-block ml-2'/>
    </button>
  )
}

export default Button