import { Group, Container, Text, Button } from '@mantine/core';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import styles from './Home.module.css';
import { useState } from 'react';

const Home = () => {
  const [isLoopDone, setIsLoopDone] = useState<boolean>(false);
  
  const [text] = useTypewriter({
    words: [
      " Full-Stack Software Engineer.",
      "n Aspiring Entrepreneur.",
      " Web Developer.",
      " Backend Engineer.",
      " System Architect.",
      " Scrummaster.",
      "n Aviation and Space Enthusiast.",
      " Virtual Pilot.",
      " Full-Stack Software Engineer.",
    ],
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2500,
    onLoopDone() {
      setIsLoopDone(true);
    },
  });
  
  return (
    <Container className={styles.homeContent}>
      <Text className={styles.greeting}>Hello, my name is <span className={styles.name}>Yağız Can Aslan</span></Text>
      <Text className={styles.subtitle}>I'm a{text}{isLoopDone ? <></> : <Cursor/>}</Text>
      
      <Text className={styles.description}>
        I'm a passionate self-driven learner and I like to challange myself. I'm always expanding my professional expertise while also thinking about how the things I learn all tie into the big picture.
      </Text>

      <Group __size="md" className={styles.buttons}>
        <Button radius="sm" className={styles.resumeButton}>View Resume as PDF</Button>
      </Group>
    </Container>
  );
};

export default Home;
