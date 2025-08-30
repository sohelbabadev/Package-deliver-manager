import React from 'react'
import { usePackageContext } from '../../context/packageContext'

function Header() {
    const {
        handleOpenAddPackageModel,
    } = usePackageContext()

    return (
        <div className='w-full flex justify-between items-center'>
            <h1 className='text-4xl font-bold'>Package List</h1>
            <button 
                className='bg-blue-600 px-4 py-2 rounded-md transition-all border-1 border-blue-600 hover:bg-white hover:border-1  hover:border-blue-600 hover:text-blue-600 cursor-pointer text-white font-bold text-sm'
                onClick={handleOpenAddPackageModel}
            >
                Add New Package
            </button>
        </div>
    )
}

export default Header