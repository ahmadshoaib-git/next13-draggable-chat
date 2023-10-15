'use client';
import React from 'react';
import Draggable from 'react-draggable';

const Chat = () => {
    const [color, setColor] = React.useState('bg-blue-800');
    const handleClick = () => {
        // debugger;
        const index = Math.floor(Math.random() * 6);
        switch (index) {
            case 0:
                setColor('bg-violet-600');
                break;
            case 1:
                setColor('bg-red-400');
                break;
            case 2:
                setColor('bg-slate-700');
                break;
            case 3:
                setColor('bg-yellow-500');
                break;
            case 4:
                setColor('bg-green-700');
                break;
            case 5:
                setColor('bg-blue-800');
                break;
            default:
                setColor('bg-blue-800');
                break;
        }
    };
    return (
        <div>
            <Draggable cancel=".btn">
                <div
                    className={`text-center cursor-pointer text-xl font-extrabold text-slate-200 w-[2rem] h-[2rem] rounded-full border-2 ${color}`}
                    onTouchStart={() => handleClick()}
                    onClick={() => handleClick()}
                >
                    +
                </div>
            </Draggable>
        </div>
    );
};

export default Chat;

