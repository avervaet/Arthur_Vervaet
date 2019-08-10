import React from 'react';

import './TimeLine.css';
import 'react-vertical-timeline-component/style.min.css';

import { Translate } from "react-localize-redux";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from './Icons/WorkIcon'
import StudyIcon from './Icons/StudyIcon'

const timeline = () =>{
	return(
	<section id="TimeLine">
	<VerticalTimeline>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Translate id="timeline.gitguardian.date"/>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.gitguardian.title"/></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.gitguardian.place"/></h4>
    <p>
    <Translate id="timeline.gitguardian.resume"/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Translate id="timeline.teacher.date"/>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.teacher.title"/></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.teacher.place"/></h4>
    <p>
    <Translate id="timeline.teacher.resume"/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Translate id="timeline.cognitiveInge.date"/>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.cognitiveInge.title"/></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.cognitiveInge.place"/></h4>
    <p>
    <Translate id="timeline.cognitiveInge.resume"/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date={<Translate id="timeline.deeplearning.date"/>}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StudyIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.deeplearning.title"/></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.deeplearning.place"/></h4>
    <p>
    <Translate id="timeline.deeplearning.resume"/>
    </p>
    <a href='https://www.coursera.org/account/accomplishments/specialization/7G25CYF3GSRJ' className="btn btn-primary"><Translate id="button.see"/></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Translate id="timeline.cognitiveIntern.date"/>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.cognitiveIntern.title"/></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.cognitiveIntern.place"/></h4>
    <p>
      <Translate id="timeline.cognitiveIntern.resume"/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date={<Translate id="timeline.machineLearning.date"/>}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StudyIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.machineLearning.title"/></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.machineLearning.place"/></h4>
    <p>
      <Translate id="timeline.machineLearning.resume"/>
    </p>
   <a href='https://www.coursera.org/account/accomplishments/certificate/ALRWJDWSZYJ8' className="btn btn-primary"><Translate id="button.see">Have a look</Translate></a>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date={<Translate id="timeline.repetto.date"/>}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.repetto.title"/></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.repetto.place"/></h4>
    <p>
    <Translate id="timeline.repetto.resume"/>
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date={<Translate id="timeline.isep.date" />}
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<StudyIcon />}
  >
    <h3 className="vertical-timeline-element-title"><Translate id="timeline.isep.title" /></h3>
    <h4 className="vertical-timeline-element-subtitle"><Translate id="timeline.isep.place" /></h4>
    <p>
      <Translate id="timeline.isep.resume" />
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</section>
		);
}

export default timeline