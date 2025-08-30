import { createContext, useContext, useState } from "react";
import { POPUP_TYPE } from "../utils/utility";

const PackageCotext = createContext({
    packages: [],
    handleOpenAddPackageModel: () => { },
    handleCloseAddPackageModel: () => { },
    handleOpenStatusModel: () => { },
    handleCloseStatusModel: () => { },
    handleOpenLocationModel: () => { },
    handleCloseLocationModel: () => { },
    handleAddPackage:() => {},
    updatePackageStatusAndLocation:() => {},
    updatePackageLocation:() => {},
    open:false,
    popupType:'',
    currentPackage: null
});

export const usePackageContext = () => useContext(PackageCotext);

export const PackageStateProvider = ({ children }) => {
    const [packages, setPackages] = useState([])
    const [popupType, setPopupType] = useState('')
    const [open, setOpen] = useState(false)

    const [currentPackage, setCurrentPackage] = useState(false)

    const handleOpenAddPackageModel = () => {
        setOpen(!open)
        setPopupType(POPUP_TYPE.ADD_NEW)
    }

    const handleCloseAddPackageModel = () => {
        setOpen(!open)
        setPopupType('')
    }

    const handleOpenStatusModel = (package_data) => {
        setOpen(!open)
        setPopupType(POPUP_TYPE.STATUS_UPDATE)
        setCurrentPackage(package_data)
    }

    const handleCloseStatusModel = () => {
        setOpen(!open)
        setPopupType('')
        setCurrentPackage(null)
    }

    const handleOpenLocationModel = (package_data) => {
        setOpen(!open)
        setCurrentPackage(package_data)
        setPopupType(POPUP_TYPE.LOCATION_UPDATE)
    }
    const handleCloseLocationModel = () => {
        setOpen(!open)
        setCurrentPackage(null)
        setPopupType('')
    }

    function handleAddPackage(obj){
        const updatePackage = [...packages]
        updatePackage.push(obj)
        updatePackage.sort((a, b) => new Date(b.created_date) - new Date(a.created_date))
        setPackages(updatePackage)
    }

    function updatePackageStatusAndLocation(id, status, location){
        const index = packages.findIndex((pack) => pack.id == id)
    
        if(index !== -1){
            const updatePackage = {
                ...packages[index],
                status:status,
                currentLocation:location
            }
            const oldPackages = packages;
            oldPackages[index] = updatePackage
            
            //update
            setPackages(oldPackages)
        }
    }

    function updatePackageLocation(id, location){
        const index = packages.findIndex((pack) => pack.id == id)
        if(index !== -1){
            const updatePackage = {
                ...packages[index],
                currentLocation:location
            }
            const oldPackages = packages;
            oldPackages[index] = updatePackage
            //update location
            setPackages(oldPackages)
        }
    }

    return (
        <PackageCotext.Provider
            value={{
                handleCloseAddPackageModel,
                handleOpenAddPackageModel,
                handleOpenStatusModel,
                handleCloseStatusModel,
                handleOpenLocationModel,
                handleCloseLocationModel,
                handleAddPackage,
                updatePackageStatusAndLocation,
                updatePackageLocation,
                open,
                popupType,
                packages,
                currentPackage
            }}
        >
            {children}
        </PackageCotext.Provider>
    )
}

