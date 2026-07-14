import React from 'react';

const SummaryCard = ({num,text}) => {
    return (
        <div className='bg-gray-100 shadow-lg rounded-lg p-6 text-center'>
            <h3 className='text-2xl font-bold'>{num}</h3>
            <p>{text}</p>
        </div>
    );
};

export default SummaryCard;