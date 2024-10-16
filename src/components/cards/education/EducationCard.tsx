import { Container, Text, Button, Group, Image, Badge } from '@mantine/core';
import styles from './EducationCard.module.css';

interface EducationCardProps {
  logo: any;
  institution: string;
  location: string;
  degree: string;
  duration: string;
  highlights: string[];
  website: string;
}

const EducationCard = ({ logo, institution, location, degree, duration, highlights, website }: EducationCardProps) => {
  return (
    <Container className={styles.card}>
      <Group align="flex-start" className={styles.cardHeader}>
        <Image src={logo} alt={`${institution} logo`} className={styles.logo} />
        <div>
          <Text size="lg">{institution}</Text>
          <Text size="sm">{location}</Text>
        </div>
        <Text size="sm" className={styles.duration}>{duration}</Text>
      </Group>
      <Text size="md" className={styles.degree}>{degree}</Text>
      <ul className={styles.highlights}>
        {highlights.map((highlight, index) => (
          <li key={index}>
            <Text size="sm">{highlight}</Text>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default EducationCard;
