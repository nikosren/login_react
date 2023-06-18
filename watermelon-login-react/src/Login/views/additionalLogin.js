import React, { useState } from 'react';
import { additionalLoginHandler } from '../handlers/loginHandler';

/*
 * Component for watermelon platform additional registration.
 */
const AdditionalLogin = () => {
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [mainGoal, setMainGoal] = useState('');
  const [useCase, setUseCase] = useState('');

  const onAdditionalLogin = (e) => {
    e.preventDefault();

    const requestBody = {
      company_name: companyName,
      industry,
      main_goal: mainGoal,
      use_case: useCase
    };

    additionalLoginHandler(requestBody);
  };

  return (
    <form onSubmit={onAdditionalLogin}>
      <h1>Watermelon Additional Login</h1>

      <label for="companyName">Company Name </label>
      <input
          type="text"
          id="companyName"
          onChange={(e) => setCompanyName(e.target.value)}
          required
      />

      <div>
        <br />
        <label for="industry">Industry:</label>
        <select id="industry" onChange={() => setIndustry(document.getElementById("mySelect").industry)}>
          <option value="Overheid">Overheid</option>
        </select>
      </div>
      <br />

      <div>
        <label for="mainGoal">Main Goal:</label>
        <select id="mainGoal" onChange={() => setMainGoal(document.getElementById("mainGoal").industry)}>
          <option value="Increase customer satisfaction">Increase customer satisfaction</option>
        </select>
      </div>
      <br />

      <div>
        <label for="useCase">Use Case:</label>
        <select id="useCase" onChange={() => setUseCase(document.getElementById("useCase").industry)} required>
          <option value="Marketing & lead generatie">Marketing & lead generatie</option>
        </select>
      </div>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AdditionalLogin;
