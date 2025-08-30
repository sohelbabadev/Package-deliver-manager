import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useState} from 'react';
import { usePackageContext } from '../../context/packageContext';

export default function CreatePackageForm({onClose}) {

  const {handleAddPackage} = usePackageContext()
  const randomId = Math.floor(100 + Math.random() * 900);

  const [state, setState] = useState({
    senderName:'',
    receiverName:'',
    sourceLocation:'',
    destinationLocation:''
  })

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;

    setState((prevState) => ({
      ...prevState,
      [name]:value
    }))
  }

  function checkDisabled(){
    return state.senderName?.trim() === '' || state.receiverName?.trim() === '' || state.sourceLocation?.trim() === '' || state.destinationLocation === ''
  }

  function addPackage() {
    if (state.senderName === state.receiverName) {
      alert('Sender and Receiver name should be different.')
    } else if (state.sourceLocation === state.destinationLocation) {
      alert('Source and Destination Location should be different')
    } else {
      const package_data = {
        id: `#${randomId}`,
        created_date: new Date(),
        status:'shipped',
        currentLocation:state.sourceLocation,
        ...state,
      }
      handleAddPackage(package_data)
      onClose()
    }
  }

  return (
    <>
      <div className='w-full p-3'>
        <div onClick={onClose} className='absolute right-2 cursor-pointer top-2'>
          <HighlightOffOutlinedIcon/>
        </div>
        <Typography fontWeight={'bold'} variant='h5' className='text-center font-bold text-2xl'>Add New Package</Typography>
      </div>
      <div className='w-full flex flex-col justify-center gap-4'>
          <div className='w-full flex flex-row gap-3 mt-3'>
             <TextField 
              label='Sender Name' 
              tabIndex={1}
              fullWidth
              variant='outlined'
              size='small'
              name='senderName'
              value={state.senderName}
              onChange={handleChange}
            />
            <TextField
              label='Receiver Name'
              tabIndex={2}
              fullWidth
              variant='outlined'
              size='small'
              name='receiverName'
              value={state.receiverName}
              onChange={handleChange}
            />
          </div>
          <div className='w-full flex flex-row gap-3'>
             <TextField 
             fullWidth
              label='Source Location' 
              tabIndex={3}
              variant='outlined'
              size='small'
              name='sourceLocation'
              value={state.sourceLocation}
              onChange={handleChange}
            />
            <TextField
            fullWidth
              label='Destination Location'
              tabIndex={4}
              variant='outlined'
              size='small'
              value={state.destinationLocation}
              onChange={handleChange}
              name='destinationLocation'
            />
          </div>
      </div>
      <div className='w-full flex justify-center py-4'>
        <button 
        tabIndex={5}
          className={`w-[180px] ${checkDisabled() ? 'bg-gray-400' : 'border-blue-600 bg-blue-600 hover:bg-white hover:border-1  hover:border-blue-600 hover:text-blue-600 cursor-pointer'} 
          px-4 py-3 rounded-md transition-all border-1   text-white font-bold text-sm`}
          onClick={!checkDisabled() ? addPackage : undefined}
          disabled={checkDisabled()}
        >
          Save
        </button>
      </div>
    </>
  )
}
