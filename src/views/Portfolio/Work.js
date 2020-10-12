import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';


const Work = ({
  image,
  imageTitle,
  title,
  content,
  resources, /* language/libraries used */
  github, /* link */
  website, /* link */
  hide, /* write hide to hide the website button */
}) => (

  <div>
    <div data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out">
      <Card variant="outlined" square class="card">
        <img
        src={image}
        alt={imageTitle}
        />
        <CardContent>
          <h5 class="portfolioHeading">
            {title}
          </h5>
          <p class="portfolioSubheading">
            {resources}
          </p>
          <p class="noto portfolioText">
            {content}
          </p>

          <a href={github} target="_blank" rel="noopener noreferrer" class="portfolioButton btn btn-secondary buttonLink" role="button">
           Github <GitHubIcon />
          </a>
          <a href={website} target="_blank" rel="noopener noreferrer"
          id={hide}  class="portfolioButton btn btn-outline-secondary buttonLink linkSpace" role="button">
           Website <WebIcon />
          </a>
        </CardContent>
      </Card>
    </div>
    <br />
    <br />
  </div>
);

export default Work
