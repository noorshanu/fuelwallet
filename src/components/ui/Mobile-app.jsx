import React from 'react'

const MobileAppBtn = ({ src, platform, text }) => {
    return (
        <button className="cursor-pointer">
            <div className="bg-white rounded-xl py-1 w-50 flex items-center gap-1">
                <img src={src} alt={platform} className="ps-1" />
                <div className="-space-y-2 text-left">
                    <p className="text-md">{text}</p>
                    <p className="font-bold text-2xl">{platform}</p>
                </div>
            </div>
        </button>
    )
}

export default MobileAppBtn