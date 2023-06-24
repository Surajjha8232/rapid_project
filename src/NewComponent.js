import React, { useState } from 'react';

const NewComponent = () => {
  const [isSection1Open, setSection1Open] = useState(false);
  const [isSection2Open, setSection2Open] = useState(false);
  const [isSection3Open, setSection3Open] = useState(false);
  const [name1, setName1] = useState('');
  const [email1, setEmail1] = useState('');
  const [name2, setName2] = useState('');
  const [email2, setEmail2] = useState('');
  const [name3, setName3] = useState('');
  const [email3, setEmail3] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const toggleSection1 = () => {
    setSection1Open(!isSection1Open);
  };

  const toggleSection2 = () => {
    setSection2Open(!isSection2Open);
  };

  const toggleSection3 = () => {
    setSection3Open(!isSection3Open);
  };

  const handleName1Change = (e) => {
    setName1(e.target.value);
  };
  const handleEmail1Change = (e) => {
    setEmail1(e.target.value);
  };
  const handleName2Change = (e) => {
    setName2(e.target.value);
  };
  const handleEmail2Change = (e) => {
    setEmail2(e.target.value);
  };
  const handleName3Change = (e) => {
    setName3(e.target.value);
  };
  const handleEmail3Change = (e) => {
    setEmail3(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      section1: { name: name1, email: email1 },
      section2: { name: name2, email: email2 },
      section3: { name: name3, email: email3 },
    };

    setSubmittedData(formData);
  };
  return (
    <div>
      <h1>Form Container</h1>

      <div className="section">
        <button onClick={toggleSection1}>Form Section 1</button>
        {isSection1Open && (
          <form>
            <label htmlFor="name1">Name:</label>
            <input type="text" id="name1" value ={name1} onChange ={handleName1Change} />

            <label htmlFor="email1">Email:</label>
            <input type="email" id="email1" value ={email1} onChange ={handleEmail1Change} />
            {/* Form fields for section 1 */}
          </form>
        )}
      </div>

      <div className="section">
        <button onClick={toggleSection2}>Form Section 2</button>
        {isSection2Open && (
          <form>
            <label htmlFor="name2">Name:</label>
            <input type="text" id="name2" value ={name2} onChange ={handleName2Change} />

            <label htmlFor="email2">Email:</label>
            <input type="email" id="email2" value ={email2} onChange ={handleEmail2Change} />

            {/* Form fields for section 2 */}
          </form>
        )}
      </div>

      <div className="section">
        <button onClick={toggleSection3}>Form Section 3</button>
        {isSection3Open && (
          <form>
            <label htmlFor="name3">Name:</label>
            <input type="text" id="name3" value ={name3} onChange ={handleName3Change} />

            <label htmlFor="email3">Email:</label>
            <input type="email" id="email3" value ={email3} onChange ={handleEmail3Change} />
            {/* Form fields for section 3 */}
          </form>
        )}
      </div>

      <button onClick={handleSubmit}>Submit</button>

      {submittedData && (
        <div>
          <h2>Submitted Form Data:</h2>
          <p>Form Section 1:</p>
          <p>Name: {submittedData.section1.name}</p>
          <p>Email: {submittedData.section1.email}</p>

          <p>Form Section 2:</p>
          <p>Name: {submittedData.section2.name}</p>
          <p>Email: {submittedData.section2.email}</p>

          <p>Form Section 3:</p>
          <p>Name: {submittedData.section3.name}</p>
          <p>Email: {submittedData.section3.email}</p>
        </div>
      )}

    </div>
  );
};

export default NewComponent;
