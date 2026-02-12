import { X } from 'lucide-react';
import React from 'react';

const ManualSetup = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4">
            {/* LEFT SIDE */}
            <div className="space-y-6 shadow rounded">
                {/* Create PK Battle */}
                <div className="bg-white rounded-xl  p-5">
                    <h2 className="font-semibold text-lg">+ Create PK Battle</h2>
                    <p className=" text-gray-500 mb-4">
                        Set up manual or automatic PK matches
                    </p>

                    <div className="space-y-3">
                        <div>
                            <label className=" font-medium">Match Type</label>
                            <select className="mt-1 w-full border border-gray-500/20 text-gray-500 bg-white outline-0 rounded-lg px-3 py-2 ">
                                <option className='bg-gray-50'>User vs user</option>
                                <option className='bg-gray-50'>User vs user</option>
                                <option className='bg-gray-50'>User vs user</option>
                            </select>
                        </div>

                        <div>
                            <label className=" font-medium">Time Slot</label>
                            <select className="mt-1 w-full border border-gray-500/20 text-gray-500 bg-white outline-0 rounded-lg px-3 py-2 ">
                                <option>Select time Slot</option>
                            </select>
                        </div>

                        <div>
                            <label className=" font-medium">Auto-Match Mode</label>
                            <p className="text-xs text-gray-500 mb-1">
                                Add one participant at a time. System will auto-matchAdd one participant at a time. System will auto-match when another participant selects the same time slot.
                            </p>
                            <select className="mt-1 w-full border border-gray-500/20 text-gray-500 bg-white outline-0 rounded-lg px-3 py-2 ">
                                <option>Select User</option>
                            </select>
                        </div>

                        <button className="w-full bg-linear-to-r cursor-pointer from-indigo-500 to-pink-500 text-white py-2 rounded-lg  font-medium">
                            + Add to Auto-Match Queue
                        </button>
                    </div>
                </div>

                {/* Manual Match Mode */}
                <div className="bg-white rounded-xl  p-5">
                    <h2 className="font-semibold text-lg mb-3">Manual Match Mode</h2>

                    <div className="space-y-3">
                        <select className="w-full border border-gray-500/20 text-gray-500 bg-white outline-0 rounded-lg px-3 py-2 ">
                            <option>Participant 1</option>
                        </select>

                        <select className="w-full w-full border border-gray-500/20 text-gray-500 bg-white outline-0 rounded-lg px-3 py-2 ">
                            <option>Participant 2</option>
                        </select>

                        <button className="w-full bg-linear-to-r cursor-pointer from-indigo-500 to-purple-500 text-white py-2 rounded-lg  font-medium flex items-center justify-center gap-2">
                            👥 Create manual match
                        </button>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">
                {/* Auto-Match Queue */}
                <div className="bg-white rounded-xl shadow p-5">
                    <h2 className="font-semibold text-lg">Auto-Match Queue</h2>
                    <p className=" text-gray-500 mb-4">
                        Waiting for matching participants
                    </p>

                    <div className="space-y-3">
                        {[
                            { name: "StreamerA", time: "15:00" },
                            { name: "StreamerA", time: "15:10" },
                            { name: "Agent Beta", time: "16:30" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center justify-between border border-gray-500/30 rounded-lg px-4 py-2"
                            >
                                <div>
                                    <p className="font-medium ">{item.name}</p>
                                    <p className="text-xs text-gray-500">
                                        User • {item.time}
                                    </p>
                                </div>
                                <X className="w-4 h-4 text-gray-400 cursor-pointer" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Matched Battles */}
                <div className="bg-white  rounded-xl shadow p-5">
                    <div className="flex items-center gap-2 mb-1">
                        🏆 <h2 className="font-semibold text-lg">Matched Battles</h2>
                    </div>
                    <p className=" text-gray-500 mb-2">Ready to start</p>

                    <div className=" rounded-xl p-">
                        <div className='flex justify-between'>
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                                manual match
                            </span>
                            <span className="bg-white/20 px-2 py-0.5 rounded text-xs">
                                10:00
                            </span>
                        </div>


                        <div className="flex items-center justify-between my-2">
                            <div className="text-center">
                                <img
                                    src="https://i.pravatar.cc/80?img=12"
                                    className="w-12 h-12 rounded-full mx-auto"
                                />
                                <p className="font-semibold  mt-1">Agent Gamma</p>
                                <p className="text-xs text-gray-500">AGT003</p>
                            </div>

                            <span className="font-bold">VS</span>

                            <div className="text-center">
                                <img
                                    src="https://i.pravatar.cc/80?img=15"
                                    className="w-12 h-12 rounded-full mx-auto"
                                />
                                <p className="font-semibold  mt-1">Agent Gamma</p>
                                <p className="text-xs text-gray-500">AGT003</p>
                            </div>
                        </div>

                        <button className="w-full bg-linear-to-r from-indigo-500 to-pink-500 text-white py-2 rounded-lg  font-medium flex items-center justify-center gap-2 cursor-pointer">
                            ⏱ Start PK Battle

                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManualSetup;