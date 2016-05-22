import React from 'react';

class Employees extends React.Component {
	constructor() {
		super();

		this.state = {
			openCard: false,
			selected: null
		};

		// this.openCard = this.openCard.bind(this);
		this.setActive = this.setActive.bind(this);
	}

	// openCard(e) {
	// 	console.log('log');
	// 	this.setState( { openCard : !this.state.openCard } );
	// }


	setActive(filter) {
		this.setState({selected: filter})
		if(this.state.selected == filter) {
			this.setState({selected: null})
		}
		console.log(this.state.selected);
	}

	isActive(value) {
		return 'card employee ' +((value===this.state.selected) ? 'open': null)
	}

  	render() {
			var employees = require('client/labela-users.json');

			var available = [];
			var busy = [];

			employees.filter(function(el){
				return (el.status === 'Available');
			}).map(function(el, index) {
	    	 available.push(el);
			})

			employees.filter(function(el){
				return (el.status === 'Busy');
			}).map(function(el, index) {
				 busy.push(el);
			})

	    return (
			<div>
				<div id="main">
					<h1>Employees : 50</h1>
					<h2>Available : {available.length}</h2>
					<ul id="cards" className="employees">
						{available.map((employee, index) => {
							return (
								<li key={employee.key} className={this.isActive(employee.key)}	 onClick={this.setActive.bind(this, employee.key)}>
									<div className="card__header">
										<div className="card__header--indicator available"></div>
										<div className="card__header--img">
											<img src={employee.avatarUrls['48x48']}/>
										</div>
										<div className="card__header--title">
											<h2>{employee.displayName}</h2>
											<p>{employee.discipline}</p>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
					<h2>Busy : {busy.length}</h2>
					<ul id="cards" className="employees">
						{busy.map((employee, index) => {
							return (
								<li key={employee.key} className={this.isActive(employee.key)}	 onClick={this.setActive.bind(this, employee.key)}>
									<div className="card__header">
										<div className="card__header--indicator busy"></div>
										<div className="card__header--img">
											<img src={employee.avatarUrls['48x48']}/>
										</div>
										<div className="card__header--title">
											<h2>{employee.displayName}</h2>
											<p>{employee.discipline}</p>
										</div>
									</div>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
	    );
  }
}

export default Employees;
