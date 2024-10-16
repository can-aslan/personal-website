import { Group, Container, Button, Text } from '@mantine/core';
import styles from './Header.module.css';
import { useState } from 'react';

const Header = () => {
  const sections = [
    { section: 'home', label: 'Home' },
    { section: 'education', label: 'Education' },
    { section: 'experience', label: 'Experience' },
    { section: 'projects', label: 'Projects' },
    { section: 'skills', label: 'Skills' },
    { section: 'achievements', label: 'Certificates' },
    { section: 'extracurricular', label: 'Extracurriculars' },
  ];

  const [activeSection, setActiveSection] = useState<string>(sections[0].section);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setActiveSection(id);
  };

  return (
    <header className={styles.header}>
      <Container className={styles.headerContent}>
        <Group align="center" className={styles.navButtons}>
          {sections.map((section) => (
            <Button
              key={section.section}
              radius="sm"
              onClick={() => scrollToSection(section.section)}
              variant={activeSection === section.section ? 'filled' : 'light'}
              color='blue'
              className={styles.navButton}
            >
              {section.label}
            </Button>
          ))}
        </Group>
      </Container>
    </header>
  );
};

export default Header;