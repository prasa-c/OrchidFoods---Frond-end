import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here.</h2>
        <p>
          Craving something tasty? Explore menus, order your favorite dishes,
          and enjoy quick delivery or pickup options. With personalized
          recommendations and effortless checkout, satisfying your hunger has
          never been easier.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
