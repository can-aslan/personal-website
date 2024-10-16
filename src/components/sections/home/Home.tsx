import { Group, Container, Text, Button } from '@mantine/core';
import styles from './Home.module.css';

const Home = () => {
  return (
    <Container className={styles.homeContent}>
      <Text className={styles.greeting}>Hello, I'm <span className={styles.name}>Yağız Can Aslan</span></Text>
      <Text className={styles.subtitle}>Full-Stack Software Engineer | Aspiring Entrepreneur</Text>
      <Text className={styles.description}>
        I'm a passionate self-driven learner and I like to challange myself. I'm always expanding my professional expertise while also thinking about how the things I learn all tie into the big picture.
      </Text>
      <Group __size="md" className={styles.buttons}>
        <Button radius="sm" className={styles.resumeButton}>View Resume PDF</Button>
      </Group>
    </Container>
  );
};

export default Home;
