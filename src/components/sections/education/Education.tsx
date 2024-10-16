import { Timeline, Text, Container } from "@mantine/core";
import styles from './Education.module.css';
import EducationCard from "../../cards/education/EducationCard";

const Education = () => {
  return (
    <Container className={styles.educationContent}>
      <Timeline active={-1} bulletSize={75} lineWidth={5}>
        <Timeline.Item>
          
          <EducationCard
            logo={require('../../../assets/images/bilkent.png')}
            institution="Bilkent University"
            location="Ankara, Turkiye"
            degree="Bachelor of Science in Computer Engineering"
            duration="Sep 2020 - Present (4 years 1 month)"
            highlights={[
              "Received 50% merit scholarship throughout the education.",
              "Ranked in top 0.07% percentile among participants in the national university entrance exam.",
            ]}
            website="https://www.bilkent.edu.tr"
          />
        </Timeline.Item>

        <Timeline.Item>
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Education;
