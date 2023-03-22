import React, { FC,ReactNode } from 'react'
import './Input.scss'

interface InputProps {
  label?:string;
  type:string;
  value:string;
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void;
  placeholder?:string;
}

const Input: FC<InputProps> = ({label,type,value,onChange,placeholder  }) => {
  return (
    <div className='input'>
     <label>{label}</label>
     <input 
     
     type={type}
     value={value}
     onChange={onChange}
     placeholder={placeholder}
     />
    </div>
  );
};

export default Input;