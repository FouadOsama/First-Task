import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Layout.scss";

const Layout = () : JSX.Element => {
	return(
		<div className="App">
			<div className='left-side'>
				<div>
					<Link to="/home" >Home</Link>
				</div>
				<div>
					<Link to="/users" >Users</Link>
				</div>
				<div>
					<Link to="/employees" >Employees</Link>
				</div>
			
			</div>
			<div className='right-side'>
				<nav>NavBar</nav>
				<div>
					<Outlet />
				</div>
			</div>
		</div>
	) 
}

export default Layout;