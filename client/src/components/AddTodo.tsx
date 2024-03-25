import React, { useState } from 'react';

type Props = {
    saveTodo:  (e: React.FormEvent, formData: any) => void;
}

const AddTodo: React.FC<Props> = ({ saveTodo}) => {
    const [formData, setFormData] = useState<ITodo | {}>()

    const handleFormData = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }
    // console.log(formData, typeof formData, Object.keys(formData))

    return (
        <form className='Form' onSubmit={(e) => saveTodo(e, formData)}>
            <div>
                <div>
                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => handleFormData(e)} type="text" id='name' />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input onChange={(e) => handleFormData(e)} type="text" id='description' />
                </div>
                <button >Add Todo</button>
            </div>
        </form>
    )
}

export default AddTodo;