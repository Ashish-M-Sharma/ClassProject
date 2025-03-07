import React, { useEffect } from "react";
import "../Css/CompanyCarousel.css";
import { useSelector, useDispatch } from "react-redux";
import { FirstFilter, NextPage, PrevPage } from "./Redux/Actions";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

export const CompanyCarousel = () => {
  const filteredArr = useSelector((state) => state.Reducer.filteredIcons);
  const PageNo = useSelector((state) => state.Reducer.page);

  const dispatch = useDispatch();

  const images = importAll(
    require.context(
      "../almabetter resoures/Carousel one",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  useEffect(() => {
    const iconsArr = [];

    for (const key in images) {
      iconsArr.push(images[key]);
    }

    dispatch(FirstFilter(iconsArr));
  }, []);

  const next = () => {
    dispatch(NextPage(PageNo + 1));
  };

  const previous = () => {
    dispatch(PrevPage(PageNo - 1));
  };

  let right = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-right"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
      />
    </svg>
  );
  let left = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      class="bi bi-arrow-left"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
      />
    </svg>
  );

  return (
    <div className="carousel-container">
      <div className="carousel-box">
        <div className="carousel-desc">
          <h1>
            Ignite your career opportunities with our 500+ hiring partners!
          </h1>
          <p>Explore endless possibilities and land your dream</p>
          <p>
            Job with our extensive network of industry-leading hiring partners
          </p>
        </div>
        <div className="carousel-main-container">
          <div className="carousel-main">
            {filteredArr.length > 0 &&
              filteredArr.map((el, i) => {
                return (
                  <img src={el} alt="" key={i} className="carousel-icon" />
                );
              })}
          </div>

          <div className="carousel-btn">
            <button className="carousel-left" onClick={previous}>
              {left}
            </button>
            <button className="carousel-right" onClick={next}>
              {right}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
