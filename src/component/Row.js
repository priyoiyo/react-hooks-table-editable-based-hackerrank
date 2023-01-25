//Row Components work as a Child component
import React, { useState } from 'react'

const Row = ({id, data, updateDataParent, deleteDataParent}) => {
    const dataColumn = data

    const [isNameEditable, setIsNameEditable] = useState(false)
    const [isEmailEditable, setIsEmailEditable] = useState(false)
    const [isSalaryEditable, setIsSalaryEditable] = useState(false)
    const [name, setName] = useState(dataColumn.name)
    const [email, setEmail] = useState(dataColumn.email)
    const [salary, setSalary] = useState(dataColumn.salary)

    const updateData = () => {
        updateDataParent(data.id, name, email, salary)
        setIsNameEditable(false)
        setIsEmailEditable(false)
        setIsSalaryEditable(false)
    }
    const deleteData = () => {

      deleteDataParent(data.id)
  }
  return (
    <tr >
    {isNameEditable? <td><input type="text" value={name} onChange={(e) => setName(e.target.value)} ></input></td> : 
    <td onClick={() => setIsNameEditable(true)}>{name}</td> }

    {isEmailEditable? <td><input type="email" value={email} onChange={(e) => setEmail(e.target.value)} ></input></td> : 
    <td onClick={() => setIsEmailEditable(true)}>{email}</td> }

    {isSalaryEditable? <td><input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} ></input></td> : 
    <td onClick={() => setIsSalaryEditable(true)}>{salary}</td> }

    <td className='operation'>
        <button className='button' onClick={()=> updateData()}>Update</button>
        <button className='button' onClick={()=> deleteData()}>Delete</button>
    </td>
</tr>
  )
}

export default Row