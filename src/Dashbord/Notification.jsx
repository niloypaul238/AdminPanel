import React, { useState } from 'react';
import { Settings, Send, Eye, RotateCcw, Trash2, Edit2, AlertTriangle, MessageSquare, Users, Home, Globe, User } from 'lucide-react';

const Notification = () => {
  const [recipients, setRecipients] = useState('individualUser');
  const [broadcast, setBroadcast] = useState('broadcastToEntireApp');
  const [notificationCategory, setNotificationCategory] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const notifications = [
    { id: 'NOT-001', category: 'System Notice', title: 'System Maintenance', recipientType: 'Broadcast', recipientId: 'All', date: '2024-01-15' },
    { id: 'NOT-001', category: 'Warning', title: 'Account Warning', recipientType: 'User', recipientId: 'USR-001', date: '2024-01-15' },
    { id: 'NOT-001', category: 'Prime Streamers', title: 'Refund Processed', recipientType: 'User', recipientId: 'USR-002', date: '2024-01-15' },
  ];

  return (
    <div  className='py-6 min-h-screen'>
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="mb-3">
          <h1 className="text-xl font-semibold ">Notification Center</h1>
          <p className="text-sm ">Send notifications to users, agencies, and hosts</p>
        </header>

        {/* Main Content Area: Select Recipients & Compose Notification */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-8">
          
          {/* Select Recipients Card */}
          <div className="md:col-span-2 h-full bg-white shadow-lg rounded-lg p-3 ">
            <h2 className="text-xl font-semibold mb-1 700">Select Recipients</h2>
            <p className="text-sm 500 mb-2 text-gray-500">Choose who will receive this notification</p>

            <div className="mb-6">
              <h3 className="text-md font-medium mb-3 600">Recipient Type</h3>
              <div className="space-y-3 text-sm border-b pb-3 border-gray-500/30">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="recipients"
                    value="individualUser"
                    checked={recipients === 'individualUser'}
                    onChange={() => setRecipients('individualUser')}
                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Individual User</span>
                </label>
                <label  className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="recipients"
                    value="individualAgency"
                    checked={recipients === 'individualAgency'}
                    onChange={() => setRecipients('individualAgency')}
                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span >Individual Agency</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="recipients"
                    value="masterAgency"
                    checked={recipients === 'masterAgency'}
                    onChange={() => setRecipients('masterAgency')}
                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Master Agency</span>
                </label>
              </div>
            </div>

            <div className="mb-6">
              <div className="space-y-3 text-sm 700">
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="broadcast"
                    value="allUsers"
                    checked={broadcast === 'allUsers'}
                    onChange={() => setBroadcast('allUsers')}
                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>All Users</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="broadcast"
                    value="allAgencies"
                    checked={broadcast === 'allAgencies'}
                    onChange={() => setBroadcast('allAgencies')}
                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>All Agencies</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="radio"
                    name="broadcast"
                    value="broadcastToEntireApp"
                    checked={broadcast === 'broadcastToEntireApp'}
                    onChange={() => setBroadcast('broadcastToEntireApp')}
                    className="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                  <span>Broadcast to Entire App</span>
                </label>
              </div>
            </div>

            <div className="p-2 bg-blue-50 rounded-lg border font-semibold  border-gray-200 text-[13px] cursor-pointer">
              This notification will be BROADCAST TO ENTIRE APP
            </div>
          </div>

          {/* Compose Notification Card */}
          <div className="md:col-span-3 bg-white shadow-lg rounded-lg p-3">
            <div className="flex justify-between items-center mb-1">
                <h2 className="text-lg font-semibold 700">Compose Notification</h2>
                <button className="flex items-center bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-4 rounded shadow">
                    <Settings className="w-4 h-4 mr-2" />
                    Set Automatic Notification
                </button>
            </div>
            <p className=" 500 mb-6">Create your notification message</p>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium 700 mb-1">Notification Category</label>
                <select
                  value={notificationCategory}
                  onChange={(e) => setNotificationCategory(e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-600/40 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md "
                >
                  <option value="">Select Notification Category</option>
                  <option value="System Notice">System Notice</option>
                  <option value="Warning">Warning</option>
                  <option value="Update">Update</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium 700 mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Enter notification title......"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-600/30 bg-white rounded-md  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium 700 mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Enter notification massege"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <label className="block text-sm font-medium 700">Attachment (Optional)</label>
                <div className="flex items-center ">
                    <input type="file" name="" className='bg-gray-500/10 border border-gray-500/20 w-full  p-1 rounded' id="" />
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-4">
                <button className="flex items-center cursor-pointer bg-linear-to-r from-[#FF44E3] to-[#294599]/60 text-white text-sm font-medium py-2 px-4 rounded shadow">
                    <Send className="w-4 h-4 mr-2" />
                    Send Notification
                </button>
                <button className="flex items-center bg-gray-300 cursor-pointer hover:bg-gray-400 800 text-sm font-medium py-2 px-4 rounded shadow">
                    <Eye className="w-4 h-4 mr-2" />
                    Preview
                </button>
                <button className="flex items-center bg-gray-300 cursor-pointer hover:bg-gray-400 800 text-sm font-medium py-2 px-4 rounded shadow">
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Sent Notifications History Table */}
        <div className="bg-white shadow-lg rounded-lg p-4">
          <h2 className=" text-2xl font-semibold mb-2 700">Sent Notifications History</h2>
          <p className="mb-4">View all previously sent notifications</p>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className='text-left tracking-wider uppercase'>
                  <th className="px-2 py-2 text-sm">Notification ID</th>
                  <th className="px-2 py-2 text-sm ">Category</th>
                  <th className="px-2 py-2 text-sm">Title</th>
                  <th className="px-2 py-2 text-sm">Recipient Type</th>
                  <th className="px-2 py-2 text-sm">Recipient ID</th>
                  <th className="px-2 py-2 text-sm">Date</th>
                  <th className="px-2 py-2 text-sm">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {notifications.map((notification) => (
                  <tr key={notification.id} className="hover:bg-gray-50 text-gray-600">
                    <td className="px-2 py-2  text-sm font-medium 900">{notification.id}</td>
                    <td className="px-2 py-2 whitespace-nowrap">{notification.category}</td>
                    <td className="px-2 py-2 whitespace-nowrap">{notification.title}</td>
                    <td className="px-2 py-2 whitespace-nowrap">{notification.recipientType}</td>
                    <td className="px-2 py-2 whitespace-nowrap">{notification.recipientId}</td>
                    <td className="px-2 py-2 whitespace-nowrap">{notification.date}</td>
                    <td className="px-2 py-2 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-3">
                        <button className="text-indigo-600 cursor-pointer hover:text-indigo-900">
                          <Edit2 className="w-5 h-5 " />
                        </button>
                        <button className="text-red-600 hover:text-red-900 cursor-pointer">
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
