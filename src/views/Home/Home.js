import React from "react";
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';


const Home = props => {
  return (
    <div id="Homepage" class="fullscreen background">
      <div data-aos="fade-right" data-aos-duration="2500" data-aos-easing="ease-in-out">

        {/* Heading */}
        <h1 class="title">
          Hi, I'm Echo.‍

          {/* Main Emoji with Tooltip */}
          <div class="responsiveTooltip">
            <Tooltip title="Hi There!" arrow TransitionComponent={Zoom} placement="right-start">
              <span role="img" aria-label="Woman Looking at Laptop Emoji">👩🏻‍💻</span>
            </Tooltip>
          </div>

          {/* Responsive Emoji without Tooltip */}
          <span class="smallTooltip" role="img" aria-label="Woman Looking at Laptop Emoji">👩🏻‍💻</span>
        </h1>
        <br />

        {/* Subheading */}
        <p class="subtitle">
          I am a full-stack web developer who loves ReactJS! Currently, I am focused on learning React Native and building web applications.
        </p>
        <p class="subtitle">
          I am seeking junior web developer opportunities!
        </p>
        <br />

        {/* Link to Portfolio */}
        <a href="/Portfolio" class="btn btn-primary buttonLink" role="button">See My Portfolio</a>

      </div>
    </div>
  );
};

export default Home;
