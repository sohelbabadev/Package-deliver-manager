import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { usePackageContext } from '../../context/packageContext';
import { status_data } from '../../utils/utility';
import { useState } from 'react';

export default function StatusUpdateForm({
    onClose,
}) {
    const { updatePackageStatusAndLocation, currentPackage } = usePackageContext()
    const [state, setState] = useState({
        status:currentPackage?.status,
        location:currentPackage?.currentLocation
    })

    function handleChange(e){
        const name = e.target.name
        const value =e.target.value

        setState((prevState) => ({ ...prevState, [name]: value }))
    }

    function handleUpdateStatus(){
        if(state.location?.trim() === ''){
            alert('Location is required to update status')
        }else{
            updatePackageStatusAndLocation(currentPackage?.id, state.status, state.location)
            onClose()
        }    
    }

    return (
        <>
            <div className='w-full p-3'>
                <div onClick={onClose} className='absolute right-2 cursor-pointer top-2'>
                    <HighlightOffOutlinedIcon />
                </div>
                <Typography fontWeight={'bold'} variant='h5' className='text-center font-bold text-2xl'>Update Status</Typography>
            </div>
            <div className='w-full flex flex-col justify-center gap-4'>
                <div className='mt-3'>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={state.status}
                            label="Status"
                            name='status'
                            onChange={handleChange}
                            tabIndex={1}
                            size='small'
                        >
                            {status_data.map((status, index) =>( 
                                <MenuItem key={index} value={status.value}>{status.label}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <TextField
                    label='Location'
                    fullWidth
                    variant='outlined'
                    size='small'
                    name='location'
                    onChange={handleChange}
                    value={state.location}
                    tabIndex={2}
                />
            </div>
            <div className='w-full flex justify-center py-4'>
                <button 
                    disabled={state.location?.trim() === ''}
                    className={`w-[180px] ${state.location?.trim() === '' ? 'bg-gray-400' : 'border-blue-600 bg-blue-600 hover:bg-white hover:border-1  hover:border-blue-600 hover:text-blue-600 cursor-pointer'} 
                    px-4 py-3 rounded-md transition-all border-1   text-white font-bold text-sm`}
                    onClick={state.location?.trim() !== '' ? handleUpdateStatus : undefined}
                    tabIndex={3}
                >
                    Save
                </button>
            </div>
        </>
    )
}
