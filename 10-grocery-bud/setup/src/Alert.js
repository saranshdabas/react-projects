import React, { useEffect } from "react";

//Passing list as dependency array, every time list changes we get a new timeout
//Otherwise if after 2s another popup comes it will only be displayed for 2s (we will not get a newTimeout)
const Alert = ({ msg, type, removeAlert, list }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [list]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
