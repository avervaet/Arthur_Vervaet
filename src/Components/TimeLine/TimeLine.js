import React from 'react';

import './TimeLine.css';
import 'react-vertical-timeline-component/style.min.css';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from './../../Components/Icons/WorkIcon'
import StudyIcon from './../../Components/Icons/StudyIcon'

const timeline = () =>{
	return(
	<section id="TimeLine">
	<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="September 2018 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Junior AI engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Cognitive Matchbox, Paris</h4>
    <p>
      Machine Learning, Front-end developpement, API management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="August 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StudyIcon />}
  >
    <h3 className="vertical-timeline-element-title">Deep Learning Specialisation</h3>
    <h4 className="vertical-timeline-element-subtitle">Coursera, Online</h4>
    <p>
      Advanced Deep Learning models and practices
    </p>
    <a href='https://www.coursera.org/account/accomplishments/specialization/7G25CYF3GSRJ' className="btn btn-primary">Have a look</a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="January 2018 - July 2018"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Intern AI engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Cognitive Matchbox, Paris</h4>
    <p>
      Machine Learning, Front-end developpement, API management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date=" December 2017"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StudyIcon />}
  >
    <h3 className="vertical-timeline-element-title">Machine Learning Certification</h3>
    <h4 className="vertical-timeline-element-subtitle">Coursera, Online</h4>
    <p>
      Machine Learning models and practices
    </p>
   <a href='https://www.coursera.org/account/accomplishments/certificate/ALRWJDWSZYJ8' className="btn btn-primary">Have a look</a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Intern web developper</h3>
    <h4 className="vertical-timeline-element-subtitle">Repetto, Paris</h4>
    <p>
      Front-end developpement, Back-end developpement
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2015 - 2018"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StudyIcon />}
  >
    <h3 className="vertical-timeline-element-title">Software engineer degree</h3>
    <h4 className="vertical-timeline-element-subtitle">ISEP, Paris</h4>
    <p>
      Software architecture, web-developpement, management
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StudyIcon />}
  >
    <h3 className="vertical-timeline-element-title">Preparatory class in mathematics</h3>
    <h4 className="vertical-timeline-element-subtitle">JB de la salle, Clermont-ferrand</h4>
    <p>
      Advance Mathematics and physics
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</section>
		);
}

export default timeline