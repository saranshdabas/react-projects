import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      return (index + 1) % people.length;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      return (people.length + index - 1) % people.length;
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let randomNumber = Math.random() * people.length;
      randomNumber = Math.floor(randomNumber);
      if (randomNumber == index) {
        randomNumber += 1;
      }
      return randomNumber % people.length;
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
