import SideBar from "../SideBar";
import {Outlet} from "react-router-dom";
const Profile =()=>{
return(
  <div className="row ps-0 wd-bg-transparent">
      <div className="col-3 ps-0">
          <SideBar />
      </div>
      <div className="col-9">
        <Outlet/>
      </div>
  </div>
);
}
export default Profile;