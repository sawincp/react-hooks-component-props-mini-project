import React from "react";

function About({ about, blogImg = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={blogImg} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;