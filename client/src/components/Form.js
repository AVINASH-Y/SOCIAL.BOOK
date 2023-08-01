// client/src/components/Form.js
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Form.css';

const Form = ({ formData, handleChange, handleSubmit }) => {
	const navigate = useNavigate();

	const handleBuildResume = () => {
		navigate('/resume');
	};

	return (
		<>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Resume Builder</title>
			<link rel="stylesheet" href="style.css" />
			<div className="form-container">
				<h2>Build Your Resume</h2>
				<form id="resumeForm">
					<div className="form-group">
						<label htmlFor="fullName">Full Name</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							placeholder="Enter your full name"
							required=""
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email"
							required=""
						/>
					</div>
					<div className="form-group">
						<label htmlFor="phone">Phone</label>
						<input
							type="tel"
							id="phone"
							name="phone"
							placeholder="Enter your phone number"
							required=""
						/>
					</div>
					<div className="form-group">
						<label htmlFor="address">Address</label>
						<textarea
							id="address"
							name="address"
							placeholder="Enter your address"
							required=""
							defaultValue={""}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="about">About</label>
						<textarea
							id="about"
							name="about"
							placeholder="Introduce yourself, write about your goals and ambitions."
							required=""
							defaultValue={""}
						/>
					</div>
					{/* Education */}
					<div className="form-group">
						<label htmlFor="education">Education</label>
						<div id="educationSection">
							<div className="education-entry">
								<input
									type="text"
									name="education[0].institution"
									placeholder="Enter institution name"
									required=""
								/>
								<input
									type="text"
									name="education[0].degree"
									placeholder="Enter degree obtained"
									required=""
								/>
								<input
									type="text"
									name="education[0].course"
									placeholder="Enter course obtained"
									required=""
								/>
								<input
									type="text"
									name="education[0].duration"
									placeholder="Enter duration (e.g., '2015 - 2019')"
									required=""
								/>
							</div>
						</div>
						<button type="button" onclick="addEducationEntry()">
							Add Education
						</button>
					</div>
					{/* Experience */}
					<div className="form-group">
						<label htmlFor="experience">Experience</label>
						<div id="experienceSection">
							<div className="experience-entry">
								<input
									type="text"
									name="experience[0].working"
									placeholder="Enter working experience"
									required=""
								/>
								<input
									type="text"
									name="experience[0].company"
									placeholder="Enter company name"
									required=""
								/>
								<input
									type="text"
									name="experience[0].position"
									placeholder="Enter position"
									required=""
								/>
								<input
									type="text"
									name="experience[0].duration"
									placeholder="Enter duration (e.g., '2020 - Present')"
									required=""
								/>
							</div>
						</div>
						<button type="button" onclick="addExperienceEntry()">
							Add Experience
						</button>
					</div>
					{/* Projects */}
					<div className="form-group">
						<label htmlFor="projects">Projects</label>
						<div id="projectsSection">
							<div className="project-entry">
								<input
									type="text"
									name="projects[0].name"
									placeholder="Enter name of the project"
									required=""
								/>
								<input
									type="text"
									name="projects[0].entity"
									placeholder="Enter entity"
									required=""
								/>
								<input
									type="text"
									name="projects[0].duration"
									placeholder="Enter duration"
									required=""
								/>
								<input
									type="text"
									name="projects[0].about"
									placeholder="Enter about"
									required=""
								/>
							</div>
						</div>
						<button type="button" onclick="addProjectEntry()">
							Add Project
						</button>
					</div>
					<div className="form-group">
						<label htmlFor="skills">Skills</label>
						<textarea
							id="skills"
							name="skills"
							placeholder="Enter your skills"
							required=""
							defaultValue={""}
						/>
					</div>
					{/* Awards */}
					<div className="form-group">
						<label htmlFor="awards">Awards</label>
						<div id="awardsSection">
							<div className="award-entry">
								<input
									type="text"
									name="awards[0].name"
									placeholder="Enter award name"
									required=""
								/>
								<input
									type="text"
									name="awards[0].date"
									placeholder="Enter date"
									required=""
								/>
								<input
									type="text"
									name="awards[0].about"
									placeholder="Enter about"
									required=""
								/>
							</div>
						</div>
						<button type="button" onclick="addAwardEntry()">
							Add Award
						</button>
					</div>
					<div className="form-group">
						<label htmlFor="interests">Interests</label>
						<textarea
							id="interests"
							name="interests"
							placeholder="Enter your interests"
							required=""
							defaultValue={""}
						/>
					</div>
					<button type="submit">Build Resume</button>
				</form>
			</div>
		</>

	);
};

export default Form;
