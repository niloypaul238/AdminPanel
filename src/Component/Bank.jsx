import React from 'react';

const Bank = ({title, transaction,revenue}) => {
    return (
        <div className='border rounded border-gray-600/20 p-4'>
            <p className='text-2xl font-black/50'>{title}</p>
            <div className='mt-2 gap-y-2.5 flex flex-col justify-center'>
                <div className='flex justify-between'>
                    <p>Total Transactions</p>
                    <span>{transaction}</span>
                </div>
                <div className='flex justify-between'>
                    <p>Total Revenue</p>
                    <span className='text-green-600'>${revenue}</span>
                </div>
                <button className='bg-blue-500/20 w-50 mx-auto px-3 py-1 rounded '>Configure</button>
            </div>
        </div>
    );
};

export default Bank;