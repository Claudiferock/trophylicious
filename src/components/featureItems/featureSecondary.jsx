import React from 'react';

import '../../App.css';
import SecondaryItems from './secondaryItems';

const FeatureSecondary = () => {

    return (
        <>
            <SecondaryItems/>

            <div className="feature__secondary--highlight" alt="secondary highlight">24% OFF</div>
            <div className="feature__secondary--more">MORE</div>
        </>
    );
}

export default FeatureSecondary;