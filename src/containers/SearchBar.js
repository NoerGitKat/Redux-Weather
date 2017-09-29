import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			keyword: ''
		}

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		this.setState({ keyword: event.target.value })
	}

	onFormSubmit(event) {
		event.preventDefault();

		//fetch weather data from api
		this.props.fetchWeather(this.state.keyword);
		this.setState({ keyword: '' });
	}
	
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className='input-group'>
				<input 	type='text'
						placeholder='Search Dutch city for weather data...'
						value={this.state.keyword}
						className='form-control'
						onChange={this.onInputChange} />
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Search!</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

//first argument is null because we don't need state in this container
export default connect(null, mapDispatchToProps)(SearchBar);