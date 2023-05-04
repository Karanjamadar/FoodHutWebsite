import react, { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";


const Loader = ({ isLoading }) => {
  const override = {
    display: "flex",
    margin: "100 auto",
    borderColor: "white",
  };
  return (
    <PulseLoader
      color={'white'}
      loading={isLoading}
      cssOverride={override}
      size={50}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loader
