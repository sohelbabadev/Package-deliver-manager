import React from 'react'
import Card from '../card'
import { usePackageContext } from '../../context/packageContext'

function MainContent() {
    const {
        handleOpenStatusModel,
        handleOpenLocationModel,
        packages
    } = usePackageContext()
    return (
        <div className='w-full flex flex-col gap-2 h-[600px] overflow-auto'>
            {packages.length === 0 ? (
                <div className='w-full  h-full flex justify-center items-center'>
                    <h1 className='font-bold text-4xl'>No Packages Found.</h1>
                </div>
            ) : (
                packages.map((pac, index) => (
                    <Card
                        key={index}
                        data={pac}
                        openStatusDialog={handleOpenStatusModel}
                        openLocationDialog={handleOpenLocationModel}
                    />
                ))
            )}

        </div>
    )
}

export default MainContent