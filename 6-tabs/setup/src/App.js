import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  const fecthJobs = async () => {
    const res = await fetch(url);
    const resJson = await res.json();
    setJobs(resJson);
    setLoading(false);
  };

  useEffect(() => fecthJobs(), []);

  if (loading) {
    return (
      <div className="loader">
        <h4>Loading...</h4>
      </div>
    );
  }

  //Adding active class on the fly by checking if the index has the same value as currently selected value
  //Using interpolation
  const { title, duties, company, dates } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* Button container */}
        <div className="btn-container">
          {jobs.map((job, index) => {
            return (
              <button
                className={`job-btn ${index === value && "active-btn"}`}
                key={job.id}
                onClick={() => setValue(index)}
              >
                {job.company}
              </button>
            );
          })}
        </div>
        {/* Job info */}
        <article className="job-info">
          <h3>{company}</h3>
          <h4>{title}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
