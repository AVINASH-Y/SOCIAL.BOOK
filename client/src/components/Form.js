// client/src/components/Form.js
import React from 'react';
import { useNavigate } from 'react-router-dom'
import './index.css';

const Form = ({ formData, handleChange, handleSubmit }) => {
  const navigate = useNavigate();

  const handleBuildResume = () => {
    navigate('/resume');
  };
 
  return (
    <div className="form-container">
      <h2>Build Your Resume</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
					type="text"
					id="fullName"
					name="fullName"
					value={formData.fullName}
					onChange={handleChange}
					placeholder="Enter your full name"
					required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
					type="email"
					id="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="Enter your email"
					required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
					type="tel"
					id="phone"
					name="phone"
					value={formData.phone}
					onChange={handleChange}
					placeholder="Enter your phone number"
					required />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
					id="address"
					name="address"
					value={formData.address}
					onChange={handleChange}
					placeholder="Enter your address"
					required />
        </div>

				<div className="form-group">
          <label htmlFor="about">About</label>
          <textarea
					id="about"
					name="about"
					value={formData.about}
					onChange={handleChange}
					placeholder="Introduce about yourself, Write about your goals and ambitions."
					required />
        </div>


        {/* Education */}
        <div className="form-group">
          <label htmlFor="education">Education</label>
          {formData.education.map((edu, index) => (
            <div key={index}>
              <input
                type="text"
                name={`education[${index}].institution`}
                value={edu.institution}
                onChange={handleChange}
                placeholder="Enter institution name"
                required
              />
              <input
                type="text"
                name={`education[${index}].degree`}
                value={edu.degree}
                onChange={handleChange}
                placeholder="Enter degree obtained"
                required
              />
              <input
                type="text"
                name={`education[${index}].duration`}
                value={edu.duration}
                onChange={handleChange}
                placeholder="Enter duration (e.g., '2015 - 2019')"
                required
              />
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          {formData.experience.map((exp, index) => (
            <div key={index}>
							<input
                type="text"
                name={`experience[${index}].working`}
                value={exp.working}
                onChange={handleChange}
                placeholder="Enter working experience"
                required
              />
              <input
                type="text"
                name={`experience[${index}].company`}
                value={exp.company}
                onChange={handleChange}
                placeholder="Enter company name"
                required
              />
              <input
                type="text"
                name={`experience[${index}].position`}
                value={exp.position}
                onChange={handleChange}
                placeholder="Enter position"
                required
              />
              <input
                type="text"
                name={`experience[${index}].duration`}
                value={exp.duration}
                onChange={handleChange}
                placeholder="Enter duration (e.g., '2020 - Present')"
                required
              />
            </div>
          ))}
        </div>

				<div className="form-group">
          <label htmlFor="projects">Projects</label>
          {formData.projects.map((proj, index) => (
            <div key={index}>
							<input
                type="text"
                name={`projects[${index}].name`}
                value={proj.name}
                onChange={handleChange}
                placeholder="Enter name of the project"
                required
              />
              <input
                type="text"
                name={`projects[${index}].entity`}
                value={proj.entity}
                onChange={handleChange}
                placeholder="Enter working experience"
                required
              />
              <input
                type="text"
                name={`projects[${index}].duration`}
                value={proj.duration}
                onChange={handleChange}
                placeholder="Enter duration"
                required
              />
              <input
                type="text"
                name={`projects[${index}].about`}
                value={proj.about}
                onChange={handleChange}
                placeholder="Enter about"
                required
              />
            </div>
          ))}
        </div>

        <div className="form-group">
          <label htmlFor="skills">Skills</label>
          <textarea
					id="skills"
					name="skills"
					value={formData.skills}
					onChange={handleChange}
					placeholder="Enter your skills"
					required />
        </div>

				<div className="form-group">
          <label htmlFor="awards">Awards</label>
          {formData.awards.map((awd, index) => (
            <div key={index}>
              <input
                type="text"
                name={`awards[${index}].name`}
                value={awd.name}
                onChange={handleChange}
                placeholder="Enter award name"
                required
              />
              <input
                type="text"
                name={`awards[${index}].date`}
                value={awd.date}
                onChange={handleChange}
                placeholder="Enter date"
                required
              />
              <input
                type="text"
                name={`awards[${index}].about`}
                value={awd.about}
                onChange={handleChange}
                placeholder="Enter about"
                required
              />
            </div>
          ))}
        </div>


				<div className="form-group">
          <label htmlFor="interests">Interests</label>
          <textarea
					id="interests"
					name="interests"
					value={formData.interests}
					onChange={handleChange}
					placeholder="Enter your interests"
					required />
        </div>

        </form>
      <button onClick={handleBuildResume}>Build Resume</button>
    </div>
  );
};

export default Form;