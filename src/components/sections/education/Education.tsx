import { Timeline, Container } from "@mantine/core";
import styles from './Education.module.css';
import EducationCard from "../../cards/education/EducationCard";
import Title from "../../title/Title";

const Education = () => {
  return (
    <Container className={styles.educationContent}>
      <Title text="Education"/>
      <Timeline active={-1} bulletSize={60} lineWidth={5}>
        <Timeline.Item>
          <EducationCard
            logo={require('../../../assets/images/bilkent.png')}
            institution="Bilkent University"
            location="Ankara, Türkiye"
            degree="Bachelor of Science, Computer Engineering"
            duration="2020 - 2024"
            highlights={[
              "Total CGPA: 3.22 / 4.00, Highest GPA: 3.70 / 4.00 (2022-2023 Fall)",
            ]}
          />
        </Timeline.Item>

        <Timeline.Item>
          <EducationCard
            logo={require('../../../assets/images/metu.png')}
            institution="METU Development Foundation High School"
            location="Ankara, Türkiye"
            degree="High School Diploma (Math & Science)"
            duration="2016 - 2020"
            highlights={[]}
          />
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Education;
