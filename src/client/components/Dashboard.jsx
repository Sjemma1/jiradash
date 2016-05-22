import React from 'react';

import Nav from 'client/components/Nav';
import Filter from 'client/components/Filter';

class Dashboard extends React.Component {
	constructor() {
		super();
	}
	render(){
			return (
			<main>
				<Nav />
				<section className="content wrap">
					<Filter />
					{this.props.children}
				</section>
			</main>
		);
	}
}

export default Dashboard;
