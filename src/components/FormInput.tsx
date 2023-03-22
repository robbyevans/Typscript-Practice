import React, { FC } from 'react'

interface FormInputProps {
  type:'text',
  value:'input'
  
}

const FormInput: FC<FormInputProps> = ({ type,value }) => {
  return (
    <div>
     FormInput
    </div>
  )
}

export default FormInput;