import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/WallOfLove.css';  // External CSS for styling
import IMG1 from "../almabetter resoures/2Artboard-1-copy_1.png";
import IMG2 from "../almabetter resoures/2Artboard-1-copy_2.png";
import IMG3 from "../almabetter resoures/2Artboard-1_1.png";
import IMG4 from "../almabetter resoures/2Artboard-1_2.png";
import IMG5 from "../almabetter resoures/2Artboard-2-copy.png";
import IMG6 from "../almabetter resoures/2Artboard-2.png";
import IMG7 from "../almabetter resoures/2Artboard-3-copy-2.png";
import IMG8 from "../almabetter resoures/2Artboard-3-copy-3.png";
import IMG9 from "../almabetter resoures/2Artboard-3-copy-4.png";
import IMG10 from "../almabetter resoures/2Artboard-3-copy-5.png";
import IMG11 from "../almabetter resoures/2Artboard-3-copy.png";
import IMG12 from "../almabetter resoures/2Artboard-3.png";

const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8,IMG9,IMG10,IMG11,IMG12];

const WallOfLove = () => {
  return (
    <div className="container py-2">
      <h2 className="text-center wall-button">Wall Of Love</h2>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center">
            <div className="image-container">
              <img src={image} alt={`Image ${index + 1}`} className="img-fluid hover-effect" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WallOfLove;
