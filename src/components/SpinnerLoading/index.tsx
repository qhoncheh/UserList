import React from "react";
import "../../core/aplication/styles/spinning-loading.scss";

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <p className="loading__text">Loading...</p>
    </div>
  );
};

export { Loading };
