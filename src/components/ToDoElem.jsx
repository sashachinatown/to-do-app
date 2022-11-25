import React from 'react';
import { useState, useRef } from 'react';
import pending from '../assets/pending.svg';
import completed from '../assets/completed.svg';


const ToDoElem = ({ task, changeStatus, removeTask, setUpdateTime }) => {
    const [userInputTitle, setUserInputTitle] = useState(task.title);
    const [userInputDesc, setUserInputDesc] = useState(task.description);
    

    const handleChangeTitle = (e) => {
        setUpdateTime(task.id);
        setUserInputTitle(e.currentTarget.value);
    };

    const handleChangeDesc = (e) => {
        setUpdateTime(task.id);
        setUserInputDesc(e.currentTarget.value);
    };

    const inputTitleRef = useRef(null);
    const titleRef = useRef(null);
    const inputDescRef = useRef(null);
    const descRef = useRef(null);

    const openEditTitle = (e) => {
        const inputTitle = inputTitleRef.current;
        inputTitle.style.width = inputTitle.value.length + 5 + "ch";
        inputTitle.classList.toggle('hide');
        inputTitle.focus();
        e.currentTarget.classList.add('hide');
    }

    const closeEditTitle = (e) => {
        const title = titleRef.current;
        if (!e.currentTarget.value || !e.currentTarget.value.replace(/\s/gi, '')) {
            setUserInputTitle('Unnamed');
        }
        title.classList.toggle('hide');
        e.currentTarget.classList.add('hide');
    }

    const openEditDesc = (e) => {
        const inputDesc = inputDescRef.current;
        if (inputDesc.value === "Edit description") {
            inputDesc.value = '';
        }
        inputDesc.style.width = inputDesc.value.length + 5 + "ch";
        inputDesc.classList.toggle('hide');
        inputDesc.focus();
        e.currentTarget.classList.add('hide');
    }

    const closeEditDesc = (e) => {
        const desc = descRef.current;
        if (!e.currentTarget.value || !e.currentTarget.value.replace(/\s/gi, '')) {
            setUserInputDesc('Edit description');
        }
        desc.classList.toggle('hide');
        e.currentTarget.classList.add('hide');
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' || e.key === 'Escape') {
            e.currentTarget.blur();
        }
    }
    
    return (
    <div 
        key={task.id} 
        className={`todo-item min-w-[520px] mt-2 flex flex-row justify-start items-center 
            ${task.pending ? 'pending' : ''}
            ${task.completed ? 'completed' : ''}`
        }>
            <h1 
                onClick={openEditTitle}
                ref={titleRef}
                className={`${task.completed ? 'text-line-through' : ''}`}>
                {userInputTitle}
            </h1>

            <input 
                type="text"
                ref={inputTitleRef}
                onChange={handleChangeTitle}
                onKeyDown={handleKeyPress}
                onBlur={closeEditTitle}
                value={userInputTitle} 
                className='hide px-3 bg-gray-200 border-[2px] border-gray-300 border-solid rounded-sm'
            />
            <span
                onClick={openEditDesc}
                ref={descRef}
                className={`mx-6 text-gray-500 ${task.completed ? 'text-line-through' : ''}`}>
                    {userInputDesc}
            </span>
            <input 
                type="text"
                ref={inputDescRef}
                onChange={handleChangeDesc}
                onKeyDown={handleKeyPress}
                onBlur={closeEditDesc}
                value={userInputDesc} 
                className='hide ml-6 px-3 bg-gray-200 border-[2px] border-gray-300 border-solid rounded-sm mr-6'
            />
            <div className='flex flex-row items-center ml-auto'>
                <img 
                    src={pending} 
                    alt="pending"
                    onClick={() => changeStatus(task.id, 'pending')}
                    className="w-[20px] h-[20px]"
                />
                <img 
                    src={completed} 
                    alt="completed"
                    onClick={() => changeStatus(task.id, 'completed')}
                    className="w-[20px] h-[20px]"
                />
                <span onClick={() => removeTask(task.id)} className="text-2xl cursor-pointer">☒</span>
            </div>
    </div>
    )
}

export default ToDoElem