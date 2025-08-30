import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useState } from 'react';
import { usePackageContext } from '../../context/packageContext';

export default function LocationUpdateForm({
    onClose,
}) {
    const { updatePackageLocation, currentPackage } = usePackageContext()
    const [location, setLocation] = useState(currentPackage?.currentLocation)

    function handleChange(e) {
        const value = e.target.value
        setLocation(value)
    }

    function handleLocationUpdate() {
        if (currentPackage.sourceLocation == location) {
            alert('Current Location should not same as source location')
        } else {
            updatePackageLocation(currentPackage.id, location)
            onClose()
        }
    }

    return (
        <>
            <div className='w-full p-3'>
                <div onClick={onClose} className='absolute right-2 cursor-pointer top-2'>
                    <HighlightOffOutlinedIcon />
                </div>
                <Typography fontWeight={'bold'} variant='h5' className='text-center font-bold text-2xl'>Update Location</Typography>
            </div>
            <div className='w-full flex flex-col justify-center gap-4'>
                <TextField
                    label='Location'
                    fullWidth
                    focused
                    variant='outlined'
                    size='small'
                    value={location}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='w-full flex justify-center py-4'>
                <button
                    disabled={location?.trim() === ''}
                    className={`w-[180px] ${location?.trim() === '' ? 'bg-gray-400' : 'border-blue-600 bg-blue-600 hover:bg-white hover:border-1  hover:border-blue-600 hover:text-blue-600 cursor-pointer'} 
                    px-4 py-3 rounded-md transition-all border-1   text-white font-bold text-sm`}
                    onClick={location?.trim() !== '' ? handleLocationUpdate : undefined}
                    tabIndex={2}
                >
                    Save
                </button>
            </div>
        </>
    )
}
