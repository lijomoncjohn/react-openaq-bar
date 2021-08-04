import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar } from 'react-chartjs-2';

import Card from '../component/UI/Card/Card';
import CardBody from '../component/UI/Card/CardBody';
import { PollutionAction } from '../core/entities/pollution/action';
import groupDataItem from '../utils/groupDataItem';
import BarChart from '../component/UI/Chart/BarChart';
import TextInput from '../component/Form/TextInput';

const Home = () => {
	const dispatch = useDispatch();

	const [parameters, setParameters] = useState([]);
	const [pollutionData, setPollutionData] = useState([]);
	const [pollutionValue, setPollutionValue] = useState([]);
	const [pollutionDate, setPollutionDate] = useState([]);

	const countries = useSelector((state) => state.pollution.country.results);
	const cities = useSelector((state) => state.pollution.city.results);
	const measurements = useSelector(
		(state) => state.pollution.measurement.results
	);

	useEffect(() => {
		dispatch(PollutionAction.getCountry());
	}, []);

	useEffect(() => {
		const unique = [...new Set(measurements.map((item) => item.parameter))];
		setParameters(unique);
	}, [dispatch, measurements]);

	const fetchCities = (e) => {
		dispatch(PollutionAction.getCity(e.target.value));
	};

	const handleSubmit = (values, { setSubmitting }) => {
		console.log(values);
		dispatch(PollutionAction.getMeasurement(values));
	};

	const groupData = async (e) => {
		let dates = [],
			values = [];
		const parameterName = e.target.innerText;
		var groupedData = groupDataItem(measurements, 'parameter');
		await setPollutionData(groupedData[parameterName]);

		for (const pollutionDataItem of pollutionData) {
			dates.push(pollutionDataItem.date.local);
			values.push(pollutionDataItem.value);
		}

		setPollutionDate(dates);
		setPollutionValue(values);
	};

	return (
		<div>
			<Formik
				initialValues={{ country: '', city: '', date_from: '', date_to: '' }}
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
								<TextInput
									type='date'
									name='date_from'
									value={values.date_from}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
							</div>
							<div class='col'>
								<TextInput
									type='date'
									name='date_to'
									value={values.date_to}
									onChange={handleChange}
									onBlur={handleBlur}
								/>
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
			<div class='d-flex flex-row bd-highlight mb-3 mt-3'>
				{parameters.map((p) => (
					<button class='btn btn-success btn-sm m-2' onClick={groupData}>
						{p}
					</button>
				))}
			</div>

			{pollutionDate.length > 0 && pollutionValue.length > 0 && (
				<BarChart labels={pollutionDate} datasets={pollutionValue} />
			)}
		</div>
	);
};

export default Home;
