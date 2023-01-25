//Table Components work as a Parent component

import React, { useState } from "react"
import Row from "./Row"
import AddRows from "./AddRows"


const dummyData = [
    {
        id: "1",
        name: "Jhon",
        email: "jhon@gmail.com",
        salary: 100000
    },
    {
        id: "2",
        name: "Amel",
        email: "amel@gmail.com",
        salary: 500000
    },
    {
        id: "3",
        name: "Budi",
        email: "budi@gmail.com",
        salary: 700000
    },
    {
        id: "4",
        name: "Nathan",
        email: "nathan@gmail.com",
        salary: 900000
    },
    {
        id: "5",
        name: "kipli",
        email: "kipli@gmail.com",
        salary: 1500000
    }
]

const Table = () => {
    const [data, setData] = useState(dummyData)


    const renderHeader = () => {
        let headerElement = ['name', 'email', 'salary', 'operation']

        return headerElement.map((data, index) => {
            return <th key={index}>{data.toUpperCase()}</th>
        })
    }

    const updateDataParent = (id, name, email, salary) => {
       const newData = [...data]
       const checked = newData.find(item => item.id === id)
       if (checked){
        checked.name = name;
        checked.email = email;
        checked.salary = parseInt(salary);
       }
        setData(newData)

    }
    const deleteDataParent = (id) => {
        const newData = data.filter(data => data.id !== id);
        setData(newData);
     }

    const callbackFunction = (name, email, salary) => {
        const newId = "id" + Math.random().toString(16).slice(2)
        const obj = { id: newId, name: name, email: email, salary: salary }
        setData((data) => ([...data, obj]));

    }

    return (
        <>
            <h1 id='title'>React Hooks Table Editable</h1>
            <h3 id='title'>Relation between parent and child component</h3>
            <h3 id='title'>Based of Hackerrank Test for React</h3>
            <table id='table'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {data.map((data, idx) => {
                        return (
                            <Row key={data.id} data={data} updateDataParent={updateDataParent} deleteDataParent={deleteDataParent}/>
                        )
                    })}
                    <AddRows parentCallback={callbackFunction} />
                </tbody>
            </table>
        </>
    )
}
export default Table