import React from 'react'
import { IoReorderThreeOutline } from 'react-icons/io5'
import { menu } from './SidebarConfig'

const Sidebar = () => {
    return (
        <div className='sticky top-0 h-[100vh]'>
            <div className='flex flex-col justify-between'>
                <div className='pt-10'>
                    <img className='w-40 ' src="https://i.imgur.com/zqpwkLQ.png" alt="" />
                </div>
                <div className='mt-10'>
                    {
                        menu.map((item) => {
                            return (
                                <div className='flex items-center mb-5 cursor-pointer text-lg'>
                                    {item.icon}
                                    <p>{item.title}</p>

                                </div>
                            )
                        })
                    }


                </div>
            </div>
            <div className='flex items-center cursor-pointer'>
                <IoReorderThreeOutline />
                <p className='ml-5'>More</p>
            </div>
        </div>
    )
}

export default Sidebar