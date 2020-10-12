import React from 'react';
import Grid from '@material-ui/core/Grid';
import Work from './Work';


const Portfolio = props => {
  return (
      <div id="Homepage" class="fullscreen background">
        <Grid container spacing={3} alignItems="center" justify="center">

          {/* Heading */}
          <Grid item xs={12}>
            <h5 class="portfolioTitle" data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
              Selected Works.
              <span role="img" aria-label="Magnifying Glass Emoji"> 🔍</span>
            </h5>
            <br />
          </Grid>


          {/************* Works (See Works.js for formatting) *****************/}

          <Work
            image="portfolio.jpg"
            imageTitle="Portfolio Website"
            title="Portfolio Website"
            resources="ReactJS • Material UI • Bootstrap"
            content="A responsive, animated portfolio site implementing Material UI and Bootstrap. I used React Router to create the separate Home, Work, and About links within the navigation bar."
            github="https://github.com/echosit/echosit.github.io"
            hide="hide"
           />


          <Work
            image="keeperapp.jpg"
            imageTitle="Keeper App"
            title="Keeper App"
            resources="ReactJS • Material UI"
            content="This is a note-creating web application styled with Material UI. Each note is responsive to screen size and is deletable."
            github="https://github.com/echosit/Keeper-App"
            hide="hide"
           />


           <Work
             image="todolist.jpg"
             imageTitle="To Do List"
             title="To Do List"
             resources="NodeJS • MongoDB • EJS"
             content="This is a to do list web application with options to add and delete items. Using EJS, a new themed to do list can be created through the hyperlink (i.e /Work) and be saved."
             github="https://github.com/echosit/To-Do-List"
             website="https://floating-sea-16114.herokuapp.com/"
            />


            <Work
              image="wiki.jpg"
              imageTitle="Wiki Rest API"
              title="Wiki Rest API"
              resources="NodeJS • MongoDB"
              content="A simple Rest API created with selected paragraphs from Wikipedia."
              github="https://github.com/echosit/Wiki-API"
              hide="hide"
             />

             <Work
               image="simongame.jpg"
               imageTitle="Simon Game"
               title="Simon Game"
               resources="JavaScript • jQuery"
               content="A re-creation of the classic Simon Game included with sound effects and flashing buttons."
               github="https://github.com/echosit/Simon-Game"
               hide="hide"
              />


             <Work
               image="doggomatch.jpg"
               imageTitle="Doggo Match"
               title="Doggo Match"
               resources="Bootstrap • CSS"
               content="An adorable website for a tinder-for-dogs app. Using Bootstrap, this website is beautiful and responsive."
               github="https://github.com/echosit/Doggo-Match"
               hide="hide"
              />

          </Grid>
        </div>
      );
    }

export default Portfolio;
