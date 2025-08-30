import React from 'react'
import Dialog from '@mui/material/Dialog'
import CreatePackageForm from '../forms/createform'
import StatusUpdateForm from '../forms/statusUpdateForm'
import LocationUpdateForm from '../forms/locationUpdateForm'
import { POPUP_TYPE } from '../../utils/utility'

function Popup({
    type,
    open,
    onClose
}) {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth={'sm'}
        >   
            <div className='w-full p-4'>
                {type === POPUP_TYPE.ADD_NEW ? (
                    <CreatePackageForm onClose={onClose}/>
                ) : type === POPUP_TYPE.STATUS_UPDATE ? (
                    <StatusUpdateForm onClose={onClose} /> 
                ): type === POPUP_TYPE.LOCATION_UPDATE ? (
                    <LocationUpdateForm onClose={onClose} />
                ): null}
            </div>
        </Dialog>

    )
}

export default Popup