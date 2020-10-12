import React from "react";
import { Timeline } from '@material-ui/lab';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import SchoolIcon from '@material-ui/icons/School';
import GavelIcon from '@material-ui/icons/Gavel';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';


const Experience = props => {
  return (
    <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">

     {/******** Main Timeline *********/}
     <Timeline align="alternate" class="bigTimeline">

       {/* Bootcamp Info */}
       <TimelineItem>
         <TimelineOppositeContent>
         <h5 class="timelineDate">
           2020
         </h5>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot color="primary">
             <LaptopMacIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <h5 class="timelineHeading">
            Bootcamp Udemy Student
          </h5>
          <h5 class="timelineSubheading">
            3 months
          </h5>
          <p class="timelineText">
            The Complete 2020 Web Development Bootcamp
          </p>
         </TimelineContent>
       </TimelineItem>

       {/* Education Info */}
       <TimelineItem>
        <TimelineOppositeContent>
          <h5 class="timelineDate">
           2016-2020
          </h5>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <h5 class="timelineHeading">
            Bachelor of Arts in Sociology
          </h5>
          <h5 class="timelineSubheading">
            Cum Laude
          </h5>
          <p class="timelineText">California Polytechnic State University, San Luis Obispo</p>
        </TimelineContent>
       </TimelineItem>

       {/* Probations Info */}
       <TimelineItem>
         <TimelineOppositeContent>
          <h5 class="timelineDate">
           2020
          </h5>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot>
             <AccountBalanceIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <h5 class="timelineHeading">
            Adult Specialty Courts Unit Intern
          </h5>
          <h5 class="timelineSubheading">
            3 months
          </h5>
          <p class="timelineText">
            Probation Department, San Luis Obispo County
          </p>
         </TimelineContent>
        </TimelineItem>

        {/* District Attorney Info */}
        <TimelineItem>
         <TimelineOppositeContent>
          <h5 class="timelineDate">
           2019 - 2020
          </h5>
         </TimelineOppositeContent>
         <TimelineSeparator>
           <TimelineDot>
             <GavelIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <h5 class="timelineHeading">
            District Attorney Intern
          </h5>
          <h5 class="timelineSubheading">
            6 months
          </h5>
          <p class="timelineText">
            Office of District Attorney, San Luis Obispo County
          </p>
         </TimelineContent>
       </TimelineItem>

     </Timeline>


    {/******** Responsive Timeline *********/}
     <Timeline class="smallTimeline">

      {/* Bootcamp Info */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <p class="timelineDate">
            2020
          </p>
          <h5 class="timelineHeading">
            Bootcamp Udemy Student
          </h5>
          <h5 class="timelineSubheading">
            3 months
          </h5>
          <p class="timelineText">
            The Complete 2020 Web Development Bootcamp
          </p>
         </TimelineContent>
       </TimelineItem>

       {/* Education Info */}
       <TimelineItem>
         <TimelineSeparator>
           <TimelineDot color="secondary">
             <SchoolIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <p class="timelineDate">
            2016 - 2020
          </p>
          <h5 class="timelineHeading">
            Bachelor of Arts in Sociology
          </h5>
          <h5 class="timelineSubheading">
            Cum Laude
          </h5>
          <p class="timelineText">
            California Polytechnic State University, San Luis Obispo
          </p>
         </TimelineContent>
       </TimelineItem>

       {/* Probations Info */}
       <TimelineItem>
         <TimelineSeparator>
           <TimelineDot>
             <AccountBalanceIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <p class="timelineDate">
            2020
          </p>
          <h5 class="timelineHeading">
            Adult Specialty Courts Unit Intern
          </h5>
          <h5 class="timelineSubheading">
            3 months
          </h5>
          <p class="timelineText">
            Probation Department, San Luis Obispo County
          </p>
         </TimelineContent>
       </TimelineItem>

       {/* District Attorney Info */}
       <TimelineItem>
         <TimelineSeparator>
           <TimelineDot>
             <GavelIcon />
           </TimelineDot>
           <TimelineConnector />
         </TimelineSeparator>
         <TimelineContent>
          <p class="timelineDate">
            2019 - 2020
          </p>
          <h5 class="timelineHeading">
            District Attorney Intern
          </h5>
          <h5 class="timelineSubheading">
            6 months
          </h5>
          <p class="timelineText">
            Office of District Attorney, San Luis Obispo County
          </p>
         </TimelineContent>
       </TimelineItem>

     </Timeline>
    </div>
  );
};

export default Experience;
