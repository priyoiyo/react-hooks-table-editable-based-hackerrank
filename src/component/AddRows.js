//AddRows Components work as a Child component
import React, {useState} from 'react'

const AddRows = ({parentCallback}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [salary, setSalary]= useState("")
    
    const sendData = () => {
        parentCallback(name, email, salary)
        setName("")
        setEmail("")
        setSalary("")
    }
  return (
    
                <tr key={"add"}>
                    <td><input type="text" value={name} onChange={(e)=> setName(e.target.value)}></input></td>
                    <td><input type="text" value={email} onChange={(e)=> setEmail(e.target.value)}></input></td>
                    <td><input type="number" value={salary} onChange={(e)=> setSalary(e.target.value)}></input></td>
                    <td className='operation'>
                        <button className='button'onClick={()=> sendData()} >Save</button>
                    </td>
                </tr>
    
  )
}

export default AddRows