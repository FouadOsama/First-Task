import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import "./Layout.scss";
import photoLogo from "../../../src/assets/pics/accorelogo.jpg";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { ROUTE_PATHS } from "../../utils/RoutePaths.ts";

const Layout = (): JSX.Element => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    navigate(ROUTE_PATHS.login);
  };

  return (
    <div className="App">
      <div className="left-side">
        <Link to="/books">
          <div className="">
            <img className="w-40" src={photoLogo} alt="photo" />
          </div>
        </Link>

        <div className="bg-inputBg mt-8 text-center p-2 w-full">
          <h1 className="font-medium">Books</h1>
        </div>
        {/* <div>
					<Link to="/home" >Home</Link>
				</div> */}
        {/* <div>
					<Link to="/users" >Users</Link>
				</div>
				<div>
					<Link to="/employees" >Employees</Link>
				</div> */}
      </div>
      <div className="right-side">
        <nav className="bg-white">
          <div className="flex justify-between">
            <div className="">
              <h1 className="font-bold text-xl text-primary">
                Accore Admin Dashboard
              </h1>
            </div>
            <div className="">
              {/* <h1 className="font-bold">Super Admin</h1>*/}

              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Super Admin
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                {/* <MenuItem onClick={handleClose}>Profile</MenuItem> */}
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogOut}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </nav>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
