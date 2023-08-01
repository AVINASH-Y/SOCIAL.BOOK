// components/Resume.js 
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './resume.css'; // Import the custom CSS for the resume page


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
					<strong>Education</strong>
					{data.education.map((edu, index) => (
						<div key={index}>
							<p>
								<strong>Institution:</strong> {edu.institution}
							</p>
							<p>
								<strong>Degree:</strong> {edu.degree}
							</p>
							<p>
								<strong>Course:</strong> {edu.course}
							</p>
							<p>
								<strong>Duration:</strong> {edu.duration}
							</p>
						</div>
					))}
				</div>

				{/* Experience */}
				<div className="resume-section">
					<strong>Experience</strong>
					{data.experience.map((exp, index) => (
						<div key={index}>
							<p>
								<strong>Company:</strong> {exp.company}
							</p>
							<p>
								<strong>Position:</strong> {exp.position}
							</p>
							<p>
								<strong>Duration:</strong> {exp.duration}
							</p>
							<p>
								{/* <strong>working:</strong>  */}
								{exp.working}
							</p>
						</div>
					))}
				</div>

				<div className="resume-section">
					<strong>Projects</strong>
					{data.projects.map((proj, index) => (
						<div key={index}>
							<p>
								<strong>Name:</strong> {proj.name}
							</p>
							<p>
								<strong>Institute/Company Name:</strong> {proj.entity}
							</p>
							<p>
								<strong>Duration:</strong> {proj.duration}
							</p>
							<p>
								{/* <strong>working:</strong>  */}
								{proj.about}
							</p>
						</div>
					))}
				</div>

				<div className="resume-section">
					<strong>Skills:</strong>
					<p>{data.skills}</p>
				</div>

				<div className="resume-section">
					<strong>Awards and Achievements:</strong>
					{data.awards.map((awd, index) => (
						<div key={index}>
							<p>
								<strong>Name:</strong> {awd.name}
							</p>
							<p>
								<strong>Date:</strong> {awd.date}
							</p>
							<p>
								{/* <strong>working:</strong>  */}
								{awd.about}
							</p>
						</div>
					))}
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
