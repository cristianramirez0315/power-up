import React from 'react';
import coverImage from "../../assets/cover/main-logo.jpg"

function Homepage() {
  return (
    <section className="my-5">
    <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
  </section>
  );
}

export default Homepage;