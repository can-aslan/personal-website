import { Container, Text, Button, Group, Image, Badge } from '@mantine/core';
import styles from './EducationCard.module.css';

interface EducationCardProps {
  logo: any;
  institution: string;
  location: string;
  degree: string;
  duration: string;
  highlights: string[];
}

const EducationCard = ({ logo, institution, location, degree, duration, highlights }: EducationCardProps) => {
  return (
    <Container className={styles.card}>
      <Group align="flex-start" className={styles.cardHeader}>
        <Group className={styles.institutionInfo}>
          <Image src={logo} alt={`${institution} logo`} className={styles.logo} />
          
          <div>
            <Text size="lg" className={styles.institution}>{institution}</Text>
            <Text size="sm" className={styles.location}>{`📍 ${location}`}</Text>
          </div>
        </Group>

        <Text size="sm" className={styles.duration}>{duration}</Text>
      </Group>

      <Text size="lg" className={styles.degree}>{degree}</Text>
      {highlights.map((highlight, index) => (
        <Text size="sm">{highlight}</Text>
      ))}
    </Container>
  );
}

export default EducationCard;
