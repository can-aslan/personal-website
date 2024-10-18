import { Container, Text, Group, Image, Badge } from '@mantine/core';
import styles from './ExperienceCard.module.css';

interface ExperienceCardProps {
  logo: any;
  institution: string;
  location: string;
  positions: string[];
  duration: string;
  positionDurations: string[];
  highlights: string[][];
  skills?: string[];
}

const ExperienceCard = ({ logo, institution, location, positions, duration, positionDurations, highlights, skills }: ExperienceCardProps) => {
  return (
    <Container className={styles.card}>
      <Group align="flex-start" className={styles.cardHeader}>
        <Group className={styles.institutionInfo}>
          <Image src={logo} alt={`${institution} logo`} className={styles.logo} />
          
          <div>
            <Text size="lg" className={styles.institution}>{institution}</Text>
            <Text size="sm" className={styles.location}>{location}</Text>
          </div>
        </Group>

        <Text size="lg" className={styles.duration}>{duration}</Text>
      </Group>

      {positions.map((position, index) => (
        <>
          <Group className={styles.positionInfo}>
            <Text size="lg" className={styles.position}>{position}</Text>
            <Text size="sm" className={styles.positionDuration}>{positionDurations[index]}</Text>
          </Group>
          {highlights[index].map((highlight, index) => (
            <Text
              className={styles.highlights}
              key={index}
              dangerouslySetInnerHTML={{ __html: `● ${highlight}` }}
            />
          ))}
        </>
      ))}
      
      <Text size="lg" className={styles.position}>Highlights</Text>
      <Group className={styles.skillGroup}>
        {skills?.map((skill, index) => (
            <Badge>{skill}</Badge>
        ))}
      </Group>
    </Container>
  );
}

export default ExperienceCard;
