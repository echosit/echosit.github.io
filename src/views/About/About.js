import React from 'react';
import Grid from '@material-ui/core/Grid';
import Experience from "../Experience/Experience";


const About = props => {
  return (
    <div class="fullscreen background">
      <Grid container spacing={3}>

        {/******** About Me Section *********/}
        <Grid item sm={12} data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">

          {/* About Picture */}
          <img class="aboutImage" src="Profile-img.JPG" alt="Echo's Profile" />

          {/* About Heading */}
          <h5 class="aboutHeading">
            Hi There!
            <span role="img" aria-label="Waving Emoji"> 👋</span>
          </h5>
          <br />

          {/* About Text */}
          <p class="aboutText">
            I am Echo, a full-stack web developer and recent college graduate. In June 2020, I graduated from California Polytechnic State University, San Luis Obispo with a bachelor’s degree in Sociology. After self-learning HTML and CSS, I shortly developed an interest for coding and enrolled in a web development bootcamp course on Udemy.
          </p>
          <p class="aboutText">
            Since then, I have committed myself to learning frontend and backend development and have built full-stack web applications using ReactJS, NodeJS, and MongoDB.
          </p>

          {/* Resume Button */}
          <div class="text-center">
            <br />
            <a href="Sit_Echo_Resume.pdf" download class="btn btn-primary buttonLink" role="button">Download my Resume</a>
          </div>

        </Grid>


       {/** Decorative Divider **/}
        <div
        data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"
        class="hrContainer">
          <hr />
        </div>


        {/******** Facts Section *********/}

        {/* Skills */}
        <Grid item xs={12} sm={6} md={4}
        data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"
        >
          <div class="gridOutline">
            <br />
            <h5 class="aboutHeading">
              My Skills
              <span role="img" aria-label="Flexing Arm Emoji"> 💪</span>
            </h5>
            <br />
            <div class=" aboutText">
              <p><b> ReactJS </b></p>
              <p><b> NodeJS </b></p>
              <p><b> MongoDB </b></p>
              <p> Git, Github </p>
              <p> Javascript, HTML, CSS  </p>
              <p> Material UI, Bootstrap </p>
              <p> Basic UI / UX </p>
            </div>
          </div>
      </Grid>

      {/* Currently Learning */}
      <Grid item xs={12} sm={6} md={4}
      data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"
      >
        <div class="gridOutline">
          <br />
          <h5 class="aboutHeading">
            Currently Learning
            <span role="img" aria-label="Open Book Emoji"> 📖</span>
          </h5>
          <br />
          <p class="aboutText">
            Right now, I'm learning React Native to create an ios app!
          </p>
        </div>
       </Grid>

       {/* Themes */}
       <Grid item sm={12} md={4}
       data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"
       >
        <div class="gridOutline">
          <br />
          <h5 class="aboutHeading">
            StrengthsQuest™ Signature Themes
            <span role="img" aria-label="Flag Emoji"> 🚩</span>
          </h5>
          <br />
          <div class="aboutText">
            <p> Restorative </p>
            <p> Empathy </p>
            <p> Belief </p>
            <p> Harmony </p>
            <p> Developer </p>
          </div>
         </div>
        </Grid>


        {/** Decorative Divider **/}
        <div class="hrContainer"
        data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"
        >
          <hr />
        </div>


        {/******** Timeline Section *********/}
        <Grid item sm={12}>
          <Experience />
        </Grid>

      </Grid>
    </div>
  );
};

export default About;
