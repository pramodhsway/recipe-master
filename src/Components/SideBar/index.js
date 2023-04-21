import {CDBSidebar, CDBSidebarMenu, CDBSidebarHeader, CDBSidebarContent, CDBSidebarMenuItem} from "cdbreact";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { isAdminService, isDealerService } from "../../Services/LoginService";

const SideBar = () => {
    const login = useSelector((state) => state.LogIn);
    const dispatch = useDispatch();
    return (
        <div
            style={{
                display: "flex",
                height: "100vh",
                overflow: "scroll initial",
            }}
        >
            <CDBSidebar
                textColor="white"
                backgroundColor="#1d2834"
                breakpoint={1200}
            >
                <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
                    <a href="/" className="text-decoration-none" style={{ color: 'whitesmoke' }}>
                        Menu
                    </a>
                </CDBSidebarHeader>
                <CDBSidebarContent className="sidebar-content">
                    <CDBSidebarMenu>
                    <NavLink
                        to="/profile"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="user" style={{color: "white"}}>
                            User Information
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/dealer"
                        style={{textDecoration: "none"}}
                    >
                        {login.logedIn && !isAdminService() && isDealerService() && (
                        <CDBSidebarMenuItem icon="user" style={{color: "white"}}>
                            Add Product
                        </CDBSidebarMenuItem>
                            )}
                    </NavLink>
                    <NavLink
                        to="/admin"
                        style={{textDecoration: "none"}}
                    >
                        {login.logedIn && isAdminService() && !isDealerService() && (
                            <CDBSidebarMenuItem icon="user" style={{color: "white"}}>
                                Manage Interactions
                            </CDBSidebarMenuItem>
                        )}
                    </NavLink>
                    <NavLink
                        to="/profile/addaddress"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="map" style={{color: "white"}}>
                            Addresses
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/profile/addpayment"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="wallet" style={{color: "white"}}>
                            Payments
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/profile/reviews"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="pen" style={{color: "white"}}>
                            Reviews
                        </CDBSidebarMenuItem>
                    </NavLink>
                    <NavLink
                        to="/profile/likes"
                        style={{textDecoration: "none"}}
                    >
                        <CDBSidebarMenuItem icon="heart" style={{color: "white"}}>
                            Liked Products
                        </CDBSidebarMenuItem>
                    </NavLink>
                    </CDBSidebarMenu>
                </CDBSidebarContent>
            </CDBSidebar>
        </div>
    );
};
export default SideBar;
