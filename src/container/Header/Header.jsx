import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
  <div className="app__wrapper_info">
    <SubHeading title="Chase the new flavour" />
    <h1 className="app__header-h1">Welcome to Kabul House</h1>
    <p className="p__opensans" style={{ margin: '2rem 0' }}>At Kabul House, we take pride in offering the finest ingredients, 
      crafted with traditional recipes that are freshly reimagined and passionately served. Indulge in the delicate flavors of Kabul House and experience 
      our exceptional service. We are delighted to have you as our guests and look forward to welcoming you warmly. </p>
    <a href='#menu'><button type="button" className="custom__button">Explore Menu</button></a>
  </div>

  <div className="app__wrapper_img">
    <img src={images.welcome1} alt="header_img" />
  </div>
</div>
)
export default Header;
