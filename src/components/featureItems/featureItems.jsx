import React from 'react';
import FeatureMain from "./featureMain";
import FeatureSecondary from "./featureSecondary";

import '../../App.css';

const FeatureItems = () => (
    <>
        <div className="Feature-items" id="feature-items">
          <FeatureMain/>
          <FeatureSecondary/>
        </div>
    </>
);

export default FeatureItems;