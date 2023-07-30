// client/src/components/Form.js

import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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


        <div className="form-group">
          <label htmlFor="education">Education</label>
          <textarea
					type="text"
					id="education"
					name="education"
					value={formData.education}
					placeholder="Enter your education details"
					onChange={handleChange}
					required />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience</label>
          <textarea
					id="experience"
					name="experience"
					value={formData.experience}
					onChange={handleChange}
					placeholder="Enter your working experience"
					required />
        </div>

				<div className="form-group">
          <label htmlFor="projects">Projects</label>
          <textarea
					id="projects"
					name="projects"
					value={formData.projects}
					onChange={handleChange}
					placeholder="Enter the details of the projects done by you" required />
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
          <textarea
					id="awards"
					name="awards"
					value={formData.awards}
					onChange={handleChange}
					placeholder="Enter your achievements"
					required />
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
