import React from 'react'
import { renderStatusButton, status_key } from '../../utils/utility'
import { Typography } from '@mui/material'

function Card({
    data,
    openStatusDialog,
    openLocationDialog
}) {

    function formatDate() {
        return new Date(data.created_date).toLocaleString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        })
    }
    return (
        <div className='w-full h-[180px] p-3 rounded-md bg-blue-50  border-1 border-blue-300'>
            <div className='w-full h-full flex flex-row gap-2 items-start'>
                <div className='w-1/3 p-4 h-full flex flex-col gap-1'>
                    <Typography fontWeight={'bold'} className='font-bold'>No: {data.id}</Typography>
                    <Typography className='capitalize'>From: {data.senderName} ({data.sourceLocation})</Typography>
                    <Typography className='capitalize'>To: {data.receiverName} ({data.destinationLocation})</Typography>
                    {renderStatusButton(data.status)}
                </div>
                <div className='w-1/3 h-full flex flex-col p-4'>
                    <div className='w-full flex flex-row gap-2 items-end justify-end'>
                        <Typography fontWeight={'bold'} className='uppercase font-bold text-1xl'>Current Location : </Typography>
                        <Typography className='capitalize'>{data.currentLocation}</Typography>
                    </div>
                    <div className='w-full flex flex-row gap-2 justify-end'>
                        <Typography fontWeight={'bold'} className='font-bold text-1xl'>Created Date : </Typography>
                        <Typography>{formatDate()}</Typography>
                    </div>
                </div>
                <div className='w-1/3 h-full p-4 flex flex-col justify-start items-end gap-2'>
                    <button
                        className={`w-[180px] ${(data.status === status_key.delivered || data.status === status_key.cancelled) ? 'bg-gray-400' : 'border-blue-600 bg-blue-600 hover:bg-white hover:border-1  hover:border-blue-600 hover:text-blue-600 cursor-pointer'} 
                    px-4 py-2 rounded-md transition-all border-1   text-white font-bold text-sm`}
                        onClick={() => (data.status === status_key.delivered || data.status === status_key.cancelled) ? undefined : openStatusDialog(data)}
                        disabled={data.status === status_key.delivered || data.status === status_key.cancelled}
                    >
                        Update Status
                    </button>
                    <button
                        className={`w-[180px] ${(data.status === status_key.delivered || data.status === status_key.cancelled) ? 'bg-gray-400' : 'border-blue-600 bg-blue-600 hover:bg-white hover:border-1  hover:border-blue-600 hover:text-blue-600 cursor-pointer'} 
                    px-4 py-2 rounded-md transition-all border-1   text-white font-bold text-sm`}
                        onClick={() => (data.status === status_key.delivered || data.status === status_key.cancelled) ? undefined : openLocationDialog(data)}
                    >
                        Update Location
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card