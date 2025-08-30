export const POPUP_TYPE = {
    ADD_NEW:'add_new',
    STATUS_UPDATE:'status_update',
    LOCATION_UPDATE:'location_update'
}

export const status_data = [
    {
        label:'Shipped',
        value:"shipped",
        class:"w-[180px] bg-yellow-300 px-4 py-2 rounded-full transition-all border-1 border-yellow-400 text-black font-bold text-sm"
    },
    {
        label:'in-Transit',
        value:'in-transit',
        class:'w-[180px] bg-sky-400 px-4 py-2 rounded-full transition-all border-1 border-blue-600 text-black font-bold text-sm'
    },
    {
        label:'Delivered',
        value:'delivered',
        class:'w-[180px] bg-green-400 px-4 py-2 rounded-full transition-all border-1 border-green-400 text-black font-bold text-sm'
    },
    {
        label:'Cancelled',
        value:'cancelled',
        class:'w-[180px] bg-red-400 px-4 py-2 rounded-full transition-all border-1 border-red-400 text-black font-bold text-sm'
    }
]

export const status_key= {
    shipped:'shipped',
    inTransit:'in-transit',
    delivered:'delivered',
    cancelled:'cancelled'
}

//render status button according to status
export function renderStatusButton(status){
    const currentStatus = status_data.find((sta) => sta.value === status)
    return (
        <button className={`${currentStatus.class} mt-2`}>
            {currentStatus.label}
        </button>
    )
}