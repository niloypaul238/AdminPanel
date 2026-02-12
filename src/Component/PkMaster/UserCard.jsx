import { Trophy } from 'lucide-react';
import React from 'react';

const UserCard = ({ data, align , winer }) => {
  return (
    <div className={`${winer == true && align == "left" ? "border border-pink-600/20 p-2 rounded-2xl" :"p-2 rounded-2xl"  }
                      ${winer == true && align == "right" ? "border border-blue-600/20 p-2 rounded-2xl" :"p-2 rounded-2xl"  }
        `}>

      <span className={`  items-center gap-x-2 ${winer == true ? "opacity-100" :"opacity-0"  }  `}><Trophy className='text-pink-500 w-13 h-13   my-3' /><span className='text-blue-600'>Winner</span></span>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-10 h-10 rounded-full ${align == "left" ? "bg-pink-500": "bg-purple-500"} text-white flex items-center justify-center font-bold`}>
          {data.name.charAt(0)}
        </div>
        <div>
          <p className="font-medium">{data.name}</p>
          <p className="text-xs text-gray-500">{data.agent}</p>
        </div>
      </div>

      <div className="text-xs text-gray-600 space-y-0.5">
        <p>Agent ID: {data.agentId}</p>
        <p>User ID: {data.userId}</p>
        <p>Location: {data.location}</p>
        <p>Date & Time: {data.dateTime}</p>
      </div>

      <div className={`rounded-lg p-4 ${align === "left"
          ? "bg-pink-100 "
          : "bg-indigo-100 text-end"
        } mt-3  rounded-md px-2 py-2 text-sm font-semibold`} >
        Diamonds <br />
        <span className='text-gray-600'>{data.diamonds}</span>
      </div>
    </div>
  );
};

export default UserCard;