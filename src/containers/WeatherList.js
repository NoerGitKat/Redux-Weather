import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
	constructor(props) {
		super(props);

		this.renderWeather = this.renderWeather.bind(this);
	}

	renderWeather(cityData) {
		const cityName = cityData.city.name;
		const temperature = _.map(cityData.list.map(weather =>
			weather.main.temp
		), (temp) => temp - 273.15);
		const pressure = cityData.list.map(weather =>
			weather.main.pressure
		);
		const humidity = cityData.list.map(weather =>
			weather.main.humidity
		);
		const {lat, lon} = cityData.city.coord;

		return (
			<tr key={cityName}>
				<td>
					<GoogleMap long={lon} lat={lat}/>
				</td>
				<td>
					<Chart data={temperature} color='blue' units='C'/>
				</td>
				<td>
					<Chart data={pressure} color='orange' units='hPa'/>
				</td>
				<td>
					<Chart data={humidity} color='green' units='%'/>
				</td>
			</tr>
		)
	}

	render() {
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({ weather }) {
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);