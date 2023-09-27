import React from "react";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className={'loading'}>
      <ClipLoader
        color="#000"
        size={250}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
