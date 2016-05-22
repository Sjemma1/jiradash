import React from 'react';
import { Link, IndexLink } from 'react-router';

export default function Nav() {
	return (
		<nav>
      <h1>JiraDash</h1>
			<div className="currentuser">
				<img className="avatar" src="/images/sem.png"/>
				<h2>Sem Ammerlaan</h2>
				<Link to="/logout">Logout</Link>
			</div>

			<IndexLink to="/" activeClassName="active"><div className="hot" ><h2>Hot</h2></div></IndexLink>
			<Link to="/ongoing" activeClassName="active"><div className="ongoing" ><h2>Ongoing</h2></div></Link>
			<Link to="/locked" activeClassName="active"><div className="locked"><h2>Locked</h2></div></Link>
			<Link to="/fridged" activeClassName="active"><div className="fridged"><h2>Fridged</h2></div></Link>
			<Link to="/me" activeClassName="active"><div className="me"><h2>Me</h2></div></Link>
			<Link to="/employees" activeClassName="active"><div><h2>Employees</h2></div></Link>
			<img className="logo" src="/images/logo.png"/>
    </nav>
	);
}
