import { Timeline, Container } from "@mantine/core";
import styles from './Experience.module.css';
import Title from "../../title/Title";

const Education = () => {
  return (
    <Container className={styles.educationContent}>
      <Title text="Experience"/>
      <Timeline active={-1} bulletSize={60} lineWidth={5}>
        <Timeline.Item>
          
        </Timeline.Item>

        <Timeline.Item>
          
        </Timeline.Item>
      </Timeline>
    </Container>
  );
}

export default Education;
