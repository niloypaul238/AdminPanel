import React from 'react';
import UserCard from './UserCard';
import { Eye, Pencil, Video, X } from 'lucide-react';
import { pkBattles } from '../../../public/data';

const AcceptedBattles = () => {
 


  return (
    <div>
      <div className="space-y-6">
        {pkBattles.map((battle) => (
          <div
            key={battle.id}
            className="bg-white rounded-xl shadow p-5"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl">{battle.title}</h3>
              <span className="font-bold">
                {battle.duration}
              </span>
              <span className="bg-pink-500 flex items-center gap-x-1 text-white text-xs px-3 py-1 rounded-full">
                <Video />Live View
              </span>
            </div>

            {/* Content */}
            <div className="flex w-full  gap-4 items-center">
              {/* Left User */}
              <div className='basis-5/12'>
                <UserCard data={battle.left} align="left" />
              </div>


              {/* VS */}
              <div className="flex basis-1/12 justify-center">
                <span className="bg-pink-400 text-white text-sm h-10 w-10 flex justify-center items-center rounded-full">
                  VS
                </span>
              </div>

              {/* Right User */}
              <div  className='basis-5/12 '>

                <UserCard data={battle.right} align="right" />
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-center flex-wrap gap-4 mt-5 text-sm">
              <button className="flex items-center gap-1 border border-gray-600/10 rounded p-1 text-gray-600">
                <Eye className="w-4 h-4" /> View Details
              </button>
              <button className="flex items-center gap-1 text-white px-2 rounded bg-pink-500">
                🔴 Live View
              </button>
              <button className="flex items-center gap-1 border border-gray-600/10 rounded p-1 text-gray-600">
                <Pencil className="w-4 h-4" /> Edit
              </button>
              <button className="flex items-center gap-1 border border-gray-600/10 rounded p-1 text-red-500">
                <X className="w-4 h-4" /> End
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcceptedBattles;