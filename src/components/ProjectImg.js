import React, { useState, useEffect } from "react";

function ProjectImg(props) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <img
      alt="preview"
      className="projects__img"
      src={props.url}
      onLoad={() => {
        setLoading(true);
      }}
      style={loading ? { visibility: "visible" } : { visibility: "hidden" }}
    ></img>
  );
}

export default ProjectImg;
