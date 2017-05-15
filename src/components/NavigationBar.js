import React from 'react';
import {Link} from 'react-router'
var NavigationBar =	() => {
	return (<nav className="navbar navbar-default">
		<div className="container-fluid">
			<div className="navbar-header">
				<Link className="navbar-brand" to="/">React Survey</Link>
			</div>
			<div className="collapse navbar-collapse">
				<ul className="nav navbar-nav navbar-right">
					<li><Link to="/about">About</Link></li>
					<li><Link to="/">Home</Link></li>
				</ul>
			</div>
		</div>
		</nav>)
}

export default NavigationBar;
