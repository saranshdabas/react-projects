import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState();
  const [loading, setLoading] = useState(true);

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
  return <h2>Jobs</h2>;
}

export default App;
