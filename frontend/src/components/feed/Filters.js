import React from "react";

const filters = () => {
  return (
    <div className="bg-graydark" id="filters">
      <h2 className="large">Filters</h2>
      <div className="filter">
        <h3>#trending tags</h3>
        <div className="tags">
          <div className="btn btn-graylight">chill</div>
          <div className="btn btn-graylight">justSaying</div>
          <div className="btn btn-graylight">Politics</div>
          <div className="btn btn-graylight">Memes</div>
        </div>
      </div>
      <div className="filter">
        <h3>College</h3>
        <div className="college">
          <div className="btn btn-graylight">DTU</div>
          <div className="btn btn-graylight">NSUT</div>
          <div className="btn btn-graylight">IGDTUW</div>
          <div className="btn btn-graylight">IIT-D</div>
          <div className="btn btn-graylight">IIIT-D</div>
          <div className="btn btn-graylight">DU</div>
          <div className="btn btn-graylight">IPU</div>
        </div>
      </div>
      <div className="filter">
        <h3>NSFW</h3>
        <div className="nsfw">
          <div className="btn btn-graylight">NSFW</div>
          <div className="btn btn-graylight">Vanilla</div>
        </div>
      </div>
    </div>
  );
};

export default filters;
