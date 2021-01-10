import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
//If we want to remove a tour we need to remove it from tours array which is here
//But the remove button is in Tour Component so we must pass a fn to that component and call it there
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch(url);
      const jsonRes = await res.json();
      setTours(jsonRes);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (tours.length == 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={getData}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
