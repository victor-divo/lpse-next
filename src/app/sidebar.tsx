"use client"
import Link from "next/link"
import { useState } from "react"


export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(true)
    return (
          <div
      className={`sidebar fixed top-0 bottom-0 lg:left-0 p-2 w-[300px] overflow-y-auto text-center bg-gray-900 ${isOpen ? "" : "hidden"}`}
    >
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
          <h1 className="font-bold text-gray-200 text-[15px] ml-3">Scrapper</h1>
          <i
            className="bi bi-x cursor-pointer ml-28 lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          ></i>
        </div>
        <div className="my-2 bg-gray-600 h-[1px]"></div>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-house-door-fill"></i>
        <Link href="/dashboard" className="text-[15px] ml-4 text-gray-200 font-bold">Dashboard</Link>
      </div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-bookmark-fill"></i>
        <Link href="/dashboard/lpse" className="text-[15px] ml-4 text-gray-200 font-bold">List LPSE</Link>
      </div>
      <div className="my-4 bg-gray-600 h-[1px]"></div>
      <div
        className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </div>
    )
}