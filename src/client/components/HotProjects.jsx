import React from 'react';

class HotProjects extends React.Component {
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
		return 'card ' +((value===this.state.selected) ? 'open': null)
	}

  	render() {
      var projects = require('client/projects-filtered.json');
      var hot = [];

      var category = 'Hot';

      projects.filter(function(el){
        return (el.category === category);
      }).map(function(el, index) {
         hot.push(el);
      })

	    return (
			<div>
				<div id="main">
					<h1>Hot Projects : {hot.length}</h1>
          {(hot.length === 0) ? <h1 className="empty-title">No {category} Projects</h1> : ''}
            <ul id="cards">
              {hot.map((project, index) => {
                return (
                  <li key={project.id} className={this.isActive(project.id)}	 onClick={this.setActive.bind(this, project.id)}>
                    <div className="card__header">
                      <div className="card__header--batch">{project.locationnumber}</div>
                      <div className="card__header--title">
                        <h2>{project.name}</h2>
                      </div>
                      <div className="card__header--img">
                        <img src={project.avatarUrls['48x48']}/>
                      </div>
                    </div>
                    <div className="twocolumns">
                      <div className="card__lead">
                        <div className="card__lead--title">
                          <p>Lead:</p>
                        </div>
                        <div className="card__lead--img">
                          <img title={project.leadname} src={project.lead}/>
                        </div>
                      </div>
                      <div className="card__deadline">
                        <div className="card__deadline--title">
                          <p>Deadline:</p>
                          <p className="daysleft">{project.daysleft}</p>
                        </div>
                        <div className="card__deadline--date">
                          <p>{project.deadline}</p>
                        </div>
                      </div>
                    </div>
                    <div className="detailed">
                      <div className="assignees">
                        <p>Assignees:</p>
                        <img src={project.assignees['1']}/>
                        <img src={project.assignees['2']}/>
                        <img src={project.assignees['3']}/>
                        <img src={project.assignees['4']}/>
                      </div>
                      <div className="barchart">
                        <div className="todo"><p>{project.todo}</p></div>
                        <div className="inprogress"><p>{project.inprogress}</p></div>
                        <div className="done"><p>{project.done}</p></div>
                      </div>
                    </div>
                    <div className="card__issue">
                      <p>TO-DO: {project.todo}/{project.total}</p>
                      <p>Latest: {project.latest}</p>
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

export default HotProjects;
