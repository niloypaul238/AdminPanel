import { createBrowserRouter } from "react-router";
import App from "./App";
import Dashbord from "./Dashbord/Dashbord";
import Host from "./Dashbord/Host";
import Users from "./Dashbord/Users";
import Agencies from "./Dashbord/Agencies";
import TransactionHistory from "./Dashbord/TransactionHistory";
import LiveStrem from "./Dashbord/LiveStrem";
import Moderation from "./Dashbord/Moderation";
import Analytics from "./Dashbord/Analytics";
import Finance from "./Dashbord/Finance";
import PKMasters from "./Dashbord/PK _Masters";
import KycCentre from "./Dashbord/KycCentre";
import SalleryTarget from "./Dashbord/SalleryTarget";
import Gift from "./Dashbord/Gift";
import Setting from "./Dashbord/Setting"
import DataHost from "./Dashbord/StoreData/DataHost";
import HostAgency from "./Dashbord/StoreData/HostAgency";
import MasterAgency from "./Dashbord/StoreData/MasterAgency";
import StoreUser from "./Dashbord/StoreData/StoreUser";
import AdminAgencies from "./Dashbord/StoreData/AdminAgency";
import CoinAgency from "./Dashbord/StoreData/CoinAgency";
import Support from "./Dashbord/StoreData/Support";
import DeletBan from "./Dashbord/StoreData/DeletBan";
import Notification from "./Dashbord/Notification";
import CoinMangment from "./Dashbord/CoinMangment";
import NotFound from "./Component/NotFound";
import PkMasterEdit from "./Component/PkMaster/PkMasterEdit";
import AddSalleryTarget from "./Component/AddSalleryTarget";
import GiftEdit from "./Component/Gift/GiftEdit";
import AddGift from "./Component/Gift/AddGift";
import EditDataHost from "./Component/DataHost/EditDataHost";
import DataHostAddAgency from "./Component/Agancies/DataHostAddAgency";
import AddAgency from "./Component/DataHost/AddAgency";
import EditHostAgency from "./Component/DataHost/EditHostAgancy";
import EditMasterAgency from "./Component/DataHost/EditMasterAgency";
import AddMasterAgency from "./Component/DataHost/AddMasterAgency";
import EditDeleteBan from "./Component/DataHost/EditDeleteBan";
import AddDeleteBan from "./Component/DataHost/AddDeleteBan";
import StoreUserEdit from "./Component/DataHost/StoreUserEdit";
import Login from "./Dashbord/Login";

const router = createBrowserRouter([
  {index:true,path:'/',Component:Login},
  {
    path: "",
    Component:App,
    children:[
        
        {path:'Dashbord',Component:Dashbord},
        {path:"host",Component:Host},
        {path:"users",Component:Users},
        {path:"coinManagement",Component:CoinMangment},
        {path:"agencies",Component:Agencies},
        {path:'transactionHistory',Component:TransactionHistory},
        {path:'liveStrem',Component:LiveStrem},
        {path:'moderation',Component:Moderation},
        {path:'analytics',Component:Analytics},
        {path:'finance',Component:Finance},
        {path:'PkMaster',Component:PKMasters},
        {path:'kyc' , Component:KycCentre},
        {path:'salleryTarget',Component:SalleryTarget},
        {path:'gift',Component:Gift},
        {path:"setting" , Component:Setting},
        {path:'HostManagement', Component:DataHost},
        {path:'HostAgency', Component:HostAgency},
        {path:'HostAgency/AddHostAgency', Component:AddAgency},
        {path:'HostAgency/Edit/:id', Component:EditHostAgency},
        {path:'masterAgency',Component:MasterAgency},
        {path:"masterAgency/Edit/:id",Component:EditMasterAgency},
        {path:"masterAgency/AddMasterAgency",Component:AddMasterAgency},
        {path:'storeUser',Component:StoreUser},
        {path:"storeUser/Edit/:id",Component:StoreUserEdit},
        {path:'adminAgency',Component:AdminAgencies},
        {path:'coinAgency',Component:CoinAgency},
        {path:'support',Component:Support},
        {path:'delete&Ban',Component:DeletBan},
        {path:"delete&Ban/Edit/:id",Component:EditDeleteBan},
        {path:'delete&Ban/AddDelete&Ban',Component:AddDeleteBan},
        {path:'notification',Component:Notification},
        {path:'PkMaster/:userId',Component:PkMasterEdit},
        {path:'salleryTarget/AddTarget',Component:AddSalleryTarget},
        {path:"gift/Edit/:id",Component:GiftEdit},
        {path:"gift/AddGift",Component:AddGift},
        {path:"HostManagement/:id",Component:EditDataHost},
        {path:"HostManagement/DataHostAddAgency",Component:DataHostAddAgency}
    ]
  },
  {
    path:"*",
    Component:NotFound
  }
]);
export default router;