import React from 'react';
import { pkBattles } from '../../../public/data';
import UserCard from './UserCard';
import { Eye, Pencil, Play, X } from 'lucide-react';

const CompletedBettle = () => {
    return (
        <div>
              <div className="space-y-6">
                {pkBattles.slice(0,2).map((battle) => (
                  <div
                    key={battle.id}
                    className="bg-white rounded-xl shadow p-5"
                  >
                    {/* Header */}
                    <div className="flex items-center bg-pink-200 p-2 rounded-t-2xl justify-between mb-10">
                      <h3 className="text-2xl font-bold">{battle.title}</h3>
                      <span className="">
                        <span className='bg-pink-500 text-white px-2 py-1 rounded-2xl mr-2 text-sm'>Completed</span>
                        <span>{battle.duration}</span>
                      </span>
                      {/* <span className="bg-pink-500 flex items-center gap-x-1 text-white text-xs px-3 py-1 rounded-full">
                        <Video />Live View
                      </span> */}
                    </div>
        
                    {/* Content */}
                    <div className="flex w-full  gap-4 items-center">
                      {/* Left User */}
                      <div className='basis-5/12'>
                        <UserCard winer={battle.left.winTeam} data={battle.left} align="left" />
                      </div>
        
        
                      {/* VS */}
                      <div className="flex basis-1/12 justify-center">
                        <span className="bg-pink-400 text-white text-sm h-10 w-10 flex justify-center items-center rounded-full">
                          VS
                        </span>
                      </div>
        
                      {/* Right User */}
                      <div  className='basis-5/12 '>
        
                        <UserCard winer={battle.right.winTeam} data={battle.right} align="right" />
                      </div>
                    </div>
        
                    {/* Actions */}
                    <div className="flex justify-center flex-wrap gap-4 mt-5">
                      <button className="flex cursor-pointer items-center gap-1 border border-gray-600/10 rounded p-1">
                        <Eye className="w-4 h-4" /> View Result Details
                      </button>
                      <button className="flex cursor-pointer items-center gap-1 text-white px-2 rounded bg-pink-500/70">
                        <Play className="w-4 h-4" /> Replay Mock
                      </button>
                      
                    </div>
                  </div>
                ))}
              </div>
            </div>
    );
};

export default CompletedBettle;