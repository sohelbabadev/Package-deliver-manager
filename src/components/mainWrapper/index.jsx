import React from 'react'
import Header from '../header'
import MainContent from '../main'
import { usePackageContext } from '../../context/packageContext'
import Popup from '../popup'
import { POPUP_TYPE } from '../../utils/utility'


function MainWrapper() {
 const {
    handleCloseAddPackageModel,
    handleCloseStatusModel,
    handleCloseLocationModel,
    open,
    popupType
 } = usePackageContext();
 
 return (
    <div className='w-full h-full bg-white px-30 py-15 gap-6 flex flex-col overflow-hidden'>   
        {(open && popupType == POPUP_TYPE.ADD_NEW) && (
            <Popup
                type={POPUP_TYPE.ADD_NEW}
                open={open}
                onClose={handleCloseAddPackageModel}
            />
        )}

        {(open && popupType == POPUP_TYPE.STATUS_UPDATE) && (
            <Popup
                type={POPUP_TYPE.STATUS_UPDATE}
                open={open}
                onClose={handleCloseStatusModel}
            />
        )}

        {(open && popupType == POPUP_TYPE.LOCATION_UPDATE) && (
            <Popup
                type={POPUP_TYPE.LOCATION_UPDATE}
                open={open}
                onClose={handleCloseLocationModel}
            />
        )}

        <Header/>
        <MainContent/>
    </div>
  )
}

export default MainWrapper