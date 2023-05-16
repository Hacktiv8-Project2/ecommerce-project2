import React from "react";
import CardComponent from "../components/CardComponent";

function HomePages() {

  return (
    <div className="md:container md:mx-auto">
      <div className="grid grid-cols-4 gap-5">
        <CardComponent />
      </div>
    </div>
  );
}

export default HomePages;
