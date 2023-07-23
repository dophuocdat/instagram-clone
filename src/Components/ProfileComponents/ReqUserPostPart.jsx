import React, { useState } from 'react'
import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai'
import { RiVideoAddLine } from 'react-icons/ri'
import { BiBookmark } from 'react-icons/bi'
import ReqUserPostCard from './ReqUserPostCard'

const ReqUserPostPart = () => {
    const [activeTab, setActiveTab] = useState();
    const tabs = [
        {
            tab: "Post",
            icon: <AiOutlineTable />,
            activeTab: ""
        }, {
            tab: "Reels",
            icon: <RiVideoAddLine />,
            activeTab: ""
        },
        {
            tab: "Saved",
            icon: <BiBookmark />,
            activeTab: ""
        }, {
            tab: "Tagged",
            icon: <AiOutlineUser />,
            activeTab: ""
        }

    ]
    return (
        <div>

            <div className='flex space-x-14 border-t relative'>
                {
                    tabs.map((item) => {
                        return (
                            <div key={item.tab}
                                className={`${activeTab === item.tab ? "border-t border-black " : "opacity-60 "}flex items-center cursor-pointer py-2 text-sm`}
                                onClick={() => setActiveTab(item.tab)}>
                                <p>{item.icon}</p>
                                <p className='ml-1 text-sm'>{item.tab}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div className='flex flex-wrap'>
                    {
                        [1, 1, 1, 1, 1, 1].map((item) => {
                            return (
                                <ReqUserPostCard />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default ReqUserPostPart