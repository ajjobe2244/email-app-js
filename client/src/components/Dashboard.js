import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
	return (
		<div className>
			<SurveyList />
			<div className="fixed-action-btn">
				<Link
					to="/surveys/new"
					class="btn-floating btn-large waves-effect waves-light red"
				>
					<i className="material-icons">add</i>
				</Link>
			</div>
		</div>
	);
};
export default Dashboard;
