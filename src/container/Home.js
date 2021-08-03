import axios from 'axios';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Chat } from 'react-charts';
import { useDispatch, useSelector } from 'react-redux';

import Card from '../component/UI/Card';
import CardBody from '../component/UI/CardBody';
import { PollutionAction } from '../core/entities/pollution/action';

const poll_data = [
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm25',
		value: 39.7,
		date: {
			utc: '2021-07-25T08:30:00+00:00',
			local: '2021-07-25T14:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'o3',
		value: 42.97,
		date: {
			utc: '2021-07-25T08:30:00+00:00',
			local: '2021-07-25T14:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm10',
		value: 52.2,
		date: {
			utc: '2021-07-25T08:30:00+00:00',
			local: '2021-07-25T14:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'no2',
		value: 11.49,
		date: {
			utc: '2021-07-25T08:30:00+00:00',
			local: '2021-07-25T14:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'so2',
		value: 50.93,
		date: {
			utc: '2021-07-25T08:30:00+00:00',
			local: '2021-07-25T14:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'co',
		value: 1460,
		date: {
			utc: '2021-07-25T08:30:00+00:00',
			local: '2021-07-25T14:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm25',
		value: 36.9,
		date: {
			utc: '2021-07-25T06:00:00+00:00',
			local: '2021-07-25T11:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm10',
		value: 102.7,
		date: {
			utc: '2021-07-25T06:00:00+00:00',
			local: '2021-07-25T11:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'o3',
		value: 34.28,
		date: {
			utc: '2021-07-25T06:00:00+00:00',
			local: '2021-07-25T11:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'no2',
		value: 10.13,
		date: {
			utc: '2021-07-25T06:00:00+00:00',
			local: '2021-07-25T11:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'so2',
		value: 20.21,
		date: {
			utc: '2021-07-25T06:00:00+00:00',
			local: '2021-07-25T11:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'co',
		value: 570,
		date: {
			utc: '2021-07-25T06:00:00+00:00',
			local: '2021-07-25T11:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm25',
		value: 36.9,
		date: {
			utc: '2021-07-25T05:30:00+00:00',
			local: '2021-07-25T11:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm10',
		value: 102.7,
		date: {
			utc: '2021-07-25T05:30:00+00:00',
			local: '2021-07-25T11:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'no2',
		value: 11.27,
		date: {
			utc: '2021-07-25T05:30:00+00:00',
			local: '2021-07-25T11:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'o3',
		value: 32.1,
		date: {
			utc: '2021-07-25T05:30:00+00:00',
			local: '2021-07-25T11:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'so2',
		value: 20.44,
		date: {
			utc: '2021-07-25T05:30:00+00:00',
			local: '2021-07-25T11:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'co',
		value: 480,
		date: {
			utc: '2021-07-25T05:30:00+00:00',
			local: '2021-07-25T11:00:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'co',
		value: 870,
		date: {
			utc: '2021-07-25T04:45:00+00:00',
			local: '2021-07-25T10:15:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm10',
		value: 70.7,
		date: {
			utc: '2021-07-25T04:45:00+00:00',
			local: '2021-07-25T10:15:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'no2',
		value: 11.24,
		date: {
			utc: '2021-07-25T04:45:00+00:00',
			local: '2021-07-25T10:15:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'o3',
		value: 28.78,
		date: {
			utc: '2021-07-25T04:45:00+00:00',
			local: '2021-07-25T10:15:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'so2',
		value: 19.79,
		date: {
			utc: '2021-07-25T04:45:00+00:00',
			local: '2021-07-25T10:15:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm25',
		value: 16.5,
		date: {
			utc: '2021-07-25T04:45:00+00:00',
			local: '2021-07-25T10:15:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'co',
		value: 1060,
		date: {
			utc: '2021-07-25T04:15:00+00:00',
			local: '2021-07-25T09:45:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm10',
		value: 87,
		date: {
			utc: '2021-07-25T04:15:00+00:00',
			local: '2021-07-25T09:45:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'no2',
		value: 11.93,
		date: {
			utc: '2021-07-25T04:15:00+00:00',
			local: '2021-07-25T09:45:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'so2',
		value: 38.3,
		date: {
			utc: '2021-07-25T04:15:00+00:00',
			local: '2021-07-25T09:45:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'o3',
		value: 31.2,
		date: {
			utc: '2021-07-25T04:15:00+00:00',
			local: '2021-07-25T09:45:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm25',
		value: 27.2,
		date: {
			utc: '2021-07-25T04:15:00+00:00',
			local: '2021-07-25T09:45:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'so2',
		value: 39.56,
		date: {
			utc: '2021-07-25T04:00:00+00:00',
			local: '2021-07-25T09:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm10',
		value: 87.9,
		date: {
			utc: '2021-07-25T04:00:00+00:00',
			local: '2021-07-25T09:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'no2',
		value: 11.48,
		date: {
			utc: '2021-07-25T04:00:00+00:00',
			local: '2021-07-25T09:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'pm25',
		value: 28.4,
		date: {
			utc: '2021-07-25T04:00:00+00:00',
			local: '2021-07-25T09:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'co',
		value: 1010,
		date: {
			utc: '2021-07-25T04:00:00+00:00',
			local: '2021-07-25T09:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
	{
		locationId: 10545,
		location: 'Civil Lines,  Ajmer - RSPCB',
		parameter: 'o3',
		value: 28.51,
		date: {
			utc: '2021-07-25T04:00:00+00:00',
			local: '2021-07-25T09:30:00+05:30',
		},
		unit: 'µg/m³',
		coordinates: {
			latitude: 26.470859,
			longitude: 74.646594,
		},
		country: 'IN',
		city: 'Ajmer',
		isMobile: false,
		isAnalysis: false,
		entity: 'government',
		sensorType: 'reference grade',
	},
];

const Home = () => {
	const dispatch = useDispatch();

	const countries = useSelector((state) => state.pollution.country.results);
	const cities = useSelector((state) => state.pollution.city.results);
	const measurements = useSelector(
		(state) => state.pollution.measurement.results
	);

	useEffect(() => {
		dispatch(PollutionAction.getCountry());
	}, []);

	const fetchCities = (e) => {
		dispatch(PollutionAction.getCity(e.target.value));
	};

	const handleSubmit = (values, { setSubmitting }) => {
		console.log(values);
		dispatch(PollutionAction.getMeasurement(values));
	};

	return (
		<div>
			<Formik
				initialValues={{ country: '', city: '' }}
				onSubmit={(values, { setSubmitting }) => {
					handleSubmit(values, { setSubmitting });
				}}>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<div class='row'>
							<div class='col'>
								<select
									class='form-select'
									name={'country'}
									value={values.country}
									onBlur={handleBlur}
									onChange={(e) => {
										fetchCities(e);
										handleChange(e);
									}}>
									<option selected>Country</option>
									{countries.map((d) => (
										<option value={d.code}>{d.name}</option>
									))}
								</select>
							</div>
							<div class='col'>
								<select
									class='form-select'
									name={'city'}
									value={values.city}
									onChange={handleChange}
									onBlur={handleBlur}>
									<option selected>City</option>
									{cities.length > 0
										? cities.map((d) => <option value={d.city}>{d.city}</option>)
										: null}
								</select>
							</div>
							<div class='col'>
								<button className='btn btn-primary' type='submit'>
									GO
								</button>
							</div>
						</div>
					</form>
				)}
			</Formik>
			<div class='row row-cols-1 row-cols-md-3 g-4 mt-3'>
				{measurements.map((m) => (
					<div class='col'>
						<div class='card'>
							<div class='card-body'>
								<h5 class='card-title'>{m.location}</h5>
								<p class='card-text'>{m.parameter}</p>
								<p class='card-text'>{m.date.local}</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
