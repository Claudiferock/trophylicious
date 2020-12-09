import React, { useState } from 'react';

import ducksAward from '../../assets/img/ducks.jpg';

import '../../App.css'

const FeatureMain = () => {

  
  // const svgHeartFill = '<svg className="svg-heart" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z"/></svg>';
  // const svgHeart = '<svg className="svg-heart" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181"/></svg>'
  const heartFillPath = 'M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z';
  const heartPath = 'M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402m5.726-20.583c-2.203 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248-3.183 0-6.281 2.187-6.281 6.191 0 4.661 5.571 9.429 12 15.809 6.43-6.38 12-11.148 12-15.809 0-4.011-3.095-6.181-6.274-6.181';
  const descriptionText = `Explaing what you've done is not easy, let alone  when it's your own code. Why not showing your appretiation to those that clearly and effortlessly let you understand their code with a quacktastick award!?`;
  // let [svgPath, setSvgPath] = useState(heartPath);

  // const toggleHeart = () => {
  //   console.log('test: ' + svgPath);
  //   return ((svgPath === heartPath) ? (setSvgPath = heartFillPath) : (setSvgPath = heartPath));
  // }

  return (
    <>
          <div className="feature__main">    
            <div className="feature__main-img">
              <img src={ducksAward} alt="Quack awards" loading="lazy"/>
            </div>

            <div className="feature__main-info">
              <h2 className="description-title">Quacktastick Award 3-Pack <span className="item--priceTag">(€{((60/100) * (3*12)).toFixed(2)})<span className="strikethrough">€60</span></span></h2>
              <p className="description-text">{descriptionText}</p>
              <div className="feature__main-details">
                <div className="item--quantity">
                  <button className="btn btn--cart btn--animated">Add to cart</button>
                </div>
                <div className="item--favorite btn btn--animated" /*onClick={toggleHeart}*/><svg className="svg-heart" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d={heartPath}/></svg></div>
              </div>
            </div>

            <div className="feature__main--highlight" alt="main highlight">60% OFF</div>
          </div>
    </>
  );
}

export default FeatureMain;