import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">We invite you to step into our modest room of tapestries and pillowed floor space. The ambiance, 
          the cuisine, the service at Kabul House will make you feel as if you are in the midst of an Afghan oasis. Our Cuisine is 
          well known throughout the community. We prepare our dishes with the freshest and finest of ingredients daily. Our chef are 
          passionate in what they create. Come and try our famous and mouth watering Kebabs.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Afghanistan means Land of the Afghans.
        It dates back to the Middle Paleolithic Era and the country’s location along the Silk Road connected it to the cultures of 
        the Middle East and other parts of Asia. It has been known that humans have been living here for the past 50,000 years. 
        We Afghans are known for our hospitality and food. Here at Kabul House 
        Pitt Meadows we promise to give you that. </p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;