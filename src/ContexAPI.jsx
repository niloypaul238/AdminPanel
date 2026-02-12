import React, { createContext, useState } from 'react';
import { agencies, agencyEarnings, banData, giftsData, masteragenciesData, PKstreamRequests, userData, users } from '../public/data';

export let ContexCreate = createContext()
const ContexAPI = ({ children }) => {
    const [PKstreamRequestsdata, setPKstreamRequestsdata] = useState(PKstreamRequests)
    let [sallery, setSallery] = useState(agencyEarnings)
    const [allGiftData, setAllGiftData] = useState(giftsData)
    const [dataHostUser, setdataHostUser] = useState(users)
    const [hostAgencyData, setHostAgencyData] = useState(agencies)
    const [masterAgencyData,setMasterAgencyData] = useState(masteragenciesData)
    const [storeUserData,setStoreUserData] = useState(userData)
    const [deletBan,setDeletBan] = useState(banData)

    return (
        <ContexCreate.Provider value={{ PKstreamRequestsdata, setPKstreamRequestsdata, sallery, setSallery, allGiftData, setAllGiftData, dataHostUser, setdataHostUser,hostAgencyData,setHostAgencyData,masterAgencyData,setMasterAgencyData,storeUserData,setStoreUserData ,deletBan,setDeletBan}}>
            {children}
        </ContexCreate.Provider>
    );
};

export default ContexAPI;