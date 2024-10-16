import { Timeline, Container } from "@mantine/core";
import styles from './Experience.module.css';
import Title from "../../title/Title";
import ExperienceCard from "../../cards/experience/ExperienceCard";

const Experience = () => {
  return (
    <Container className={styles.experienceContent}>
      <Title text="Experience"/>
      <Timeline active={1} bulletSize={60} lineWidth={5}>
        <Timeline.Item>
          <ExperienceCard
            logo={require('../../../assets/images/yapi_kredi.jfif')}
            institution="Yapı Kredi Teknoloji"
            location="Remote / İstanbul, Türkiye"
            positions={["Software Engineer", "Part-Time Software Engineer"]}
            duration="Jan 2023 - Present"
            positionDurations={["Jul 2024 - Present", "Jan 2023 - Jun 2024"]}
            highlights={[[
              "Total CGPA: 3.22 / 4.00, Highest GPA: 3.70 / 4.00 (2022-2023 Fall)",
            ], ["Total CGPA: 3.22 / 4.00, Highest GPA: 3.70 / 4.00 (2022-2023 Fall)"]]}
          />
        </Timeline.Item>

        <Timeline.Item>
          
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Experience;
