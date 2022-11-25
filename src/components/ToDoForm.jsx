import React from 'react'
import { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [userInputTitle, setUserInputTitle] = useState('');
    const [userInputDesc, setUserInputDesc] = useState('');

    const handleChangeTitle = (e) => {
        setUserInputTitle(e.currentTarget.value);
    };

    const handleChangeDesc = (e) => {
        setUserInputDesc(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInputTitle, userInputDesc);
        setUserInputTitle('');
        setUserInputDesc('');
    };

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-10 flex flex-col justify-center items-center">
            <div className='flex flex-row justify-center items-start'>
                <input 
                    value={userInputTitle}
                    type="text"
                    onChange={handleChangeTitle}
                    onKeyDown={handleKeyPress}
                    placeholder="Type your task name here"
                    className='py-2 px-4 border-[2px] border-gray-300 border-solid rounded-md min-w-[240px]'
                />
                <textarea 
                    value={userInputDesc}
                    type="text"
                    onChange={handleChangeDesc}
                    onKeyDown={handleKeyPress}
                    placeholder="Type description here (Optional)"
                    className='py-2 px-4 border-[2px] h-[2.75rem] border-gray-300 border-solid rounded-md ml-2 min-w-[270px]'
                />
            </div>
            <button className='mt-6 py-2 w-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-lg rounded-md'>Save</button>
        </form>
    )
}

export default ToDoForm