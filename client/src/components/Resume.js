// client/src/components/Resume.js

import React from 'react';
// import { useHistory } from 'react-router-dom';
import './resume.css'; // Import the custom CSS for the resume page
import { useNavigate } from 'react-router-dom';


const Resume = ({ data }) => {
	const navigate = useNavigate();

	const handleBackToForm = () => {
		navigate("/resume-form");
	};

	return (
		<>
			<div className="resume-container">
				<h2>Resume</h2>
				<div className="resume-section">
					<hr />
					{/* <h3>Personal Information</h3> */}
					<p>
						<strong>Full Name:</strong> {data.fullName}
					</p>
					<p>
						<strong>Email:</strong> {data.email}
					</p>
					<p>
						<strong>Phone:</strong> {data.phone}
					</p>
					<p>
						<strong>Address:</strong> {data.address}
					</p>
				</div>

				<div className="resume-section">
					<strong>About:</strong>
					<p>{data.about}</p>
				</div>

				<div className="resume-section">
					<strong>Education:</strong>
					<p>{data.education}</p>
				</div>

				<div className="resume-section">
					<strong>Experience:</strong>
					<p>{data.experience}</p>
				</div>

				<div className="resume-section">
					<strong>Projects:</strong>
					<p>{data.projects}</p>
				</div>

				<div className="resume-section">
					<strong>Skills:</strong>
					<p>{data.skills}</p>
				</div>

				<div className="resume-section">
					<strong>Awards and Achievements:</strong>
					<p>{data.awards}</p>
				</div>

				<div className="resume-section">
					<strong>Interests:</strong>
					<p>{data.interests}</p>
				</div>

			</div>
			<button onClick={handleBackToForm}>Back to Form</button>
		</>
	);
};

export default Resume;
