import React from 'react';

class Filter extends React.Component {
	render () {
		return (
			<div id="filter">
				<input name="010" type="checkbox"></input>
				<label htmlFor="010">010</label>
				<input name="020" type="checkbox"></input>
				<label htmlFor="020">020</label>
			</div>
		)
	}
}

export default Filter;
