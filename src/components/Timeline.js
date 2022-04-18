import React from 'react';
import '../css/Timeline.css';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

function TimelineComponent() {
  return (
    <div className='timeline-container'>
 <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2019
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot color="success"/>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Data Analyst - Northwell Health</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
            2020
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Finance Analyst - OMD </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
           2021
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot  color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Sr. Finance Analyst - Saks</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
           2022
          </TimelineOppositeContent>
          <TimelineSeparator>
          <TimelineDot color="success"/>
            {/* <TimelineConnector /> */}
          </TimelineSeparator>
          <TimelineContent>Full Stack Software Engineer</TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  );
}

export default TimelineComponent;
