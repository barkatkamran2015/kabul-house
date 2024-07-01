import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">At Kabul House, we believe in honoring the rich traditions of Kabul House by using only the 
            highest quality ingredients. Our commitment is to blend age-old recipes with modern techniques, creating dishes that are 
            both authentic and innovative. We strive for culinary excellence in every meal, ensuring a flavorful journey through
            Afghanistan.</p>
        </div>
        <p className="p__opensans">Our passion for detail and perfection ensures that each dining experience with us is truly unforgettable.</p>
      </div>

      <div className="app__chef-sign">
        <p>Dawood Ashpaz</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;