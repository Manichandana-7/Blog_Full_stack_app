import React from 'react'

const Addblog = () => {
  return (
    <div className="flex justify-center items-center m-10">
        <div className="flex flex-col justify-center items-center p-10 border border-gray-300 rounded-lg shadow-xl space-y-5 w-1/2 h-1/2">
            <h1 className="font-bold text-2xl text-center text-sky-800 ">Add a blog</h1>
            <label htmlFor="" className="text-xl block font-bold mb-2 self-start text-sky-800">Title:</label>
            <input type="text" placeholder='Enter title' className="border-1 rounded-md w-full p-2 bg-gray-50"/>
            <label htmlFor="" className="text-xl block font-bold mb-2 self-start text-sky-800">Description</label>
            <textarea name="" id="" rows="8" placeholder='Enter the description' className="border-1 rounded-md w-full p-2 bg-gray-50"></textarea>
            <label htmlFor="" className="text-xl block font-bold mb-2 self-start text-sky-800">Image URL:</label>
            <input type="text" placeholder='Enter Image Url' className="border-1 rounded-md w-full p-2 bg-gray-50"/>
            <label htmlFor="" className="text-xl block font-bold mb-2 self-start text-sky-800">Author:</label>
            <input type="text" placeholder='Enter author name' className="border-1 rounded-md w-full p-2 bg-gray-50"/>
            <label htmlFor="" className="text-xl block font-bold mb-2 self-start text-sky-800">Created Date:</label>
            <input type="date" placeholder='Select date' className="border-1 rounded-md w-full p-2 bg-gray-50"/>
            <button className="px-5 py-2 bg-sky-700 text-white rounded-md hover:bg-sky-600">Add blog</button>           
        </div>
      
    </div>
  )
}

export default Addblog
